import { CcConfig, getFallback } from '../caCommon';

const fallbackGroup = ['A', 'C', 'D', 'E'];

export class CcConfigLte extends CcConfig {
  constructor(bandOrString: number | string, bwClass?: string) {
    super();

    if (typeof bandOrString === 'number' && bwClass) {
      this.band = Number(bandOrString);
      if (isNaN(this.band)) {
        throw Error(`bandOrString (${bandOrString}) is not a valid band number`);
      }
      this.fallbackGroup = fallbackGroup;
      this.bwClass = bwClass;
      if (!this.fallbackGroup.includes(this.bwClass)) {
        throw Error(`bwClass (${bwClass}) is not a valid bandwidth class`);
      }
    } else if (typeof bandOrString === 'string' && !bwClass) {
      const bandNumberPart = bandOrString.match(/\d+/)[0];
      this.band = Number(bandNumberPart);
      this.fallbackGroup = fallbackGroup;
      this.bwClass = bandOrString.substring(bandNumberPart.length);
      if (!this.fallbackGroup.includes(this.bwClass)) {
        throw Error(`bandOrString (${bandOrString}) does not contain a valid bandwidth class`);
      }
    } else {
      throw Error('Invalid arguments');
    }
  }

  public toString(): string {
    return `${this.band}${this.bwClass}`;
  }
}

if (require.main === module) {
  const argv = process.argv;
  const caConfig = argv[2];
  const ccConfigArr = caConfig.replace('CA_', '').split('-')
                                .map((caConfigPerCc) => new CcConfigLte(caConfigPerCc));
  process.stdout.write('Original input\n');
  process.stdout.write(`${caConfig}\n`);
  process.stdout.write('\n');

  const fallbackCombos = getFallback(ccConfigArr, CcConfigLte);
  process.stdout.write('Cartesian product\n');
  fallbackCombos.forEach((combo) => {
    const comboFiltered = combo.filter((caConfigPerCc) => caConfigPerCc !== null);
    if (!comboFiltered.length) {
      return;
    }
    process.stdout.write(`CA_${comboFiltered.join('-')}\n`);
  });
}
