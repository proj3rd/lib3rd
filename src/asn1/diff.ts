import { readFileSync } from 'fs';
import * as yargs from 'yargs';
import { formatTxt } from './format';
import { parse } from './parse';
import { IModules } from './visitors/modules';

interface IIeReference {
  moduleName: string;
  ieName: string;
}

export function diff(filePathOld: string, filePathNew: string): string {
  const asn1Old = parse(readFileSync(filePathOld, 'utf8'));
  const asn1New = parse(readFileSync(filePathNew, 'utf8'));
  const iesOld = flattenIes(asn1Old);
  const iesNew = flattenIes(asn1New);
  const iesCommon: IIeReference[] = [];
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
  return '';
}

function flattenIes(asn1: IModules): IIeReference[] {
  const iesFlattened: IIeReference[] = [];
  // tslint:disable-next-line: forin
  for (const moduleName in asn1) {
    // tslint:disable-next-line: forin
    for (const ieName in asn1[moduleName].assignments) {
      iesFlattened.push({moduleName, ieName});
    }
  }
  return iesFlattened;
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
  diff(filePathOld, filePathNew);
}
