import { readFileSync } from 'fs';
import { cloneDeep } from 'lodash';
import { getWorkbook } from '../common/spreadsheet';
import { ValueAssignment } from './classes/valueAssignment';
import { parse } from './parser';

describe('Format in spreadsheets [format_spreadsheet_all]', function () {
  this.timeout(0);

  const testCaseList: ITestCase[] = [
    _tc('LTE RRC', '36331', '36331-g00.asn1'),
    _tc('S1AP', '36413', '36413-g00.asn1'),
    _tc('X2AP', '36423', '36423-g00.asn1'),
    _tc('NR RRC', '38331', '38331-g00.asn1'),
    _tc('NGAP', '38413', '38413-g00.asn1'),
    _tc('XnAP', '38423', '38423-g00.asn1'),
    _tc('E1AP', '38463', '38463-g00.asn1'),
    _tc('F1AP', '38473', '38473-g00.asn1'),
  ];

  testCaseList.forEach((testCase) => {
    const { name, specNumber, filename } = testCase;

    describe(`${name} (${specNumber}) [format_spreadsheet_ie_all_${specNumber}]`, function () {
      const asn1 = readFileSync(`resources/${filename}`, 'utf8');
      const modules = parse(asn1);
      modules.modules.forEach((module) => {
        module.assignments.forEach((assignment) => {
          if (assignment instanceof ValueAssignment) {
            return;
          }
          it(`${module.name}.${assignment.name}`, function () {
            const wb = getWorkbook();
            assignment.toSpreadsheet(wb);
          });
        });
      });
    });

    describe(`${name} (${specNumber}) [format_spreadsheet_ie_all_expanded_${specNumber}]`, function () {
      const asn1 = readFileSync(`resources/${filename}`, 'utf8');
      const modules = parse(asn1);
      modules.modules.forEach((module) => {
        module.assignments.forEach((assignment) => {
          if (assignment instanceof ValueAssignment) {
            return;
          }
          it(`${module.name}.${assignment.name}`, function () {
            const expandedAssignment = cloneDeep(assignment).expand(modules);
            const wb = getWorkbook();
            expandedAssignment.toSpreadsheet(wb);
          });
        });
      });
    });
  });

  interface ITestCase {
    name: string;
    specNumber: string;
    filename: string;
  }

  function _tc(name: string, specNumber: string, filename: string): ITestCase {
    return { name, specNumber, filename };
  }
});
