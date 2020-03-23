import { createTwoFilesPatch } from 'diff';
import { html, parse as parseDiff } from 'diff2html';
import { readFileSync } from 'fs';
import { parse as parsePath } from 'path';
import * as pug from 'pug';
import * as yargs from 'yargs';
import { formatTxt } from './format';
import { parse } from './parse';
import { IModules } from './visitors/modules';

interface IIeWithDiff {
  moduleName: string;
  ieName: string;
  diff?: string;
  diffHtml?: string;
}

interface IDiffResult {
  iesOld: IIeWithDiff[];
  iesNew: IIeWithDiff[];
  iesCommon: IIeWithDiff[];
}

const PATCH_LENGTH_WITHOUT_FILENAMES = 92;

export function diff(asn1Old: IModules, asn1New: IModules,
                     fileNameOld: string = '', fileNameNew: string = ''): IDiffResult {
  const {iesOld, iesNew, iesCommon} = classifyIes(asn1Old, asn1New);
  iesCommon.forEach((ie) => {
    const formattedOld = formatSingle(ie, asn1Old);
    const formattedNew = formatSingle(ie, asn1New);
    const patch = createTwoFilesPatch(ie.ieName, ie.ieName, formattedOld, formattedNew, `(${fileNameOld})`, `(${fileNameNew})`, {
      context: 9999,
    });
    if (patch.length - fileNameOld.length - fileNameNew.length - 3 * ie.ieName.length
        === PATCH_LENGTH_WITHOUT_FILENAMES) {
      // Ignore the empty diff:
      // Index: ie.ieName
      // ===================================================================
      // --- ie.ieName	oldHeader
      // +++ ie.ieName	newHeader
      return;
    }
    ie.diff = patch;
  });
  return {iesOld, iesNew, iesCommon};
}

export function renderDiff(diffResult: IDiffResult): string {
  const {iesOld, iesNew, iesCommon} = diffResult;
  iesCommon.forEach((ie) => {
    if (!ie.diff) {
      return;
    }
    const diffJson = parseDiff(ie.diff);
    ie.diffHtml = html(diffJson, {drawFileList: true});
  });
  const rendered = pug.renderFile(`${__dirname}/../../resources/diff.pug`, {
    iesOld, iesNew, iesCommon,
  });
  return rendered;
}

function classifyIes(asn1Old: IModules, asn1New: IModules): IDiffResult {
  const iesOld = flattenIes(asn1Old);
  const iesNew = flattenIes(asn1New);
  const iesCommon: IIeWithDiff[] = [];
  for (let indexOld = iesOld.length - 1; indexOld >= 0; indexOld--) {
    const ieOld = iesOld[indexOld];
    const indexNew = iesNew.findIndex((ieNew) => {
      return ieOld.moduleName === ieNew.moduleName && ieOld.ieName === ieNew.ieName;
    });
    if (indexNew !== -1) {
      iesCommon.push(ieOld);
      iesOld.splice(indexOld, 1);
      iesNew.splice(indexNew, 1);
    }
  }
  return {iesOld, iesNew, iesCommon};
}

function flattenIes(asn1: IModules): IIeWithDiff[] {
  const iesFlattened: IIeWithDiff[] = [];
  // tslint:disable-next-line: forin
  for (const moduleName in asn1) {
    // tslint:disable-next-line: forin
    for (const ieName in asn1[moduleName].assignments) {
      iesFlattened.push({moduleName, ieName});
    }
  }
  return iesFlattened;
}

function formatSingle(ie: IIeWithDiff, asn1: IModules): string {
  return formatTxt([{
    name: ie.ieName,
    definition: asn1[ie.moduleName].assignments[ie.ieName],
  }]);
}

if (require.main === module) {
  const argv = yargs
    .command('<oldFilePath> <newFilePath>', 'Compare <oldFilePath> and <newFilePath>')
    .help()
    .argv;
  const [filePathOld, filePathNew] = argv._;
  if (!filePathOld || !filePathNew) {
    throw Error('Require 2 arguments, oldFilePath and newFilePath');
  }
  const asn1Old = parse(readFileSync(filePathOld, 'utf8'));
  const asn1New = parse(readFileSync(filePathNew, 'utf8'));
  const fileNameOld = parsePath(filePathOld).name;
  const fileNameNew = parsePath(filePathNew).name;
  const diffResult = diff(asn1Old, asn1New, fileNameOld, fileNameNew);
  const rendered = renderDiff(diffResult);
  process.stdout.write(rendered);
}
