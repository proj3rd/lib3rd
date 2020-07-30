import { readFileSync } from 'fs';
import { parse } from './parser';

// tslint:disable-next-line: only-arrow-functions
describe('Parse ASN.1 [parse_all]', function () {
  this.timeout(0);

  // tslint:disable-next-line: only-arrow-functions
  it('LTE RRC (36331) [parse_36331]', function () {
    const asn1 = readFileSync('resources/36331-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('S1AP (36413) [parse_36413]', function () {
    const asn1 = readFileSync('resources/36413-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('X2AP (36423) [parse_36423]', function () {
    const asn1 = readFileSync('resources/36423-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('NR RRC (38331) [parse_38331]', function () {
    const asn1 = readFileSync('resources/38331-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('NGAP (38413) [parse_38413]', function () {
    const asn1 = readFileSync('resources/38413-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('XnAP (38423) [parse_38423]', function () {
    const asn1 = readFileSync('resources/38423-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('E1AP (38463) [parse_38463]', function () {
    const asn1 = readFileSync('resources/38463-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('F1AP (38473) [parse_38473]', function () {
    const asn1 = readFileSync('resources/38473-g00.asn1', 'utf8');
    parse(asn1);
  });
});
