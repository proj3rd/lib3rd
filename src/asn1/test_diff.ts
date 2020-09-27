import { readFileSync, writeFileSync } from 'fs';
import { IDiffResult, renderDiff } from './diff';

// tslint:disable-next-line: only-arrow-functions
describe('Diff ASN.1 [diff_all]', function () {
  // tslint:disable-next-line: only-arrow-functions
  it('Render diff result [diff_render]', function () {
    const diffFile = readFileSync(
      'resources/diff_36331-f90.asn1_36331-g00.asn1.json',
      'utf8'
    );
    const diffResult = JSON.parse(diffFile) as IDiffResult;
    const { specOld, specNew } = diffResult;
    const template = readFileSync(`${__dirname}/../../resources/diff.pug`, 'utf8');
    const rendered = renderDiff(diffResult, template);
    const path = `diff_${specOld}_${specNew}.html`;
    writeFileSync(path, rendered);
  });
});
