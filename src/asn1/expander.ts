import { readFileSync } from 'fs';
import { Parameter } from './classes/parameter';
import { ActualParameter } from './classes/parameterizedType';
import { parse } from './parser';

export interface IParameterMapping {
  parameter: Parameter;
  actualParameter: ActualParameter | undefined;
}

// tslint:disable-next-line: only-arrow-functions
describe('Expand ASN.1 [expand_all]', function () {
  this.timeout(0);

  // tslint:disable-next-line: only-arrow-functions
  it('LTE RRC (36331) [expand_36331]', function () {
    const asn1 = readFileSync('resources/36331-g00.asn1', 'utf8');
    const modules = parse(asn1);
    modules.modules.forEach((moduleDefinition) => {
      const { assignments } = moduleDefinition;
      assignments.forEach((assignment) => {
        assignment.expand(modules, []);
      });
    });
  });

  // tslint:disable-next-line: only-arrow-functions
  it('NR RRC (38331) [expand_38331]', function () {
    const asn1 = readFileSync('resources/38331-g00.asn1', 'utf8');
    const modules = parse(asn1);
    modules.modules.forEach((moduleDefinition) => {
      const { assignments } = moduleDefinition;
      assignments.forEach((assignment) => {
        assignment.expand(modules, []);
      });
    });
  });
});
