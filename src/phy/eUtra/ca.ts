import * as combinatorics from 'js-combinatorics';

const fallbackGroup = ['A', 'C', 'D', 'E'];

class CaConfigPerCc {
  public band: number;
  public bwClass: string;

  constructor(bandOrString: number | string, bwClass?: string) {
    if (typeof bandOrString === 'number' && bwClass) {
      this.band = Number(bandOrString);
      if (isNaN(this.band)) {
        throw Error(`bandOrString (${bandOrString}) is not a valid band number`);
      }
      if (!fallbackGroup.includes(bwClass)) {
        throw Error(`bwClass (${bwClass}) is not a valid bandwidth class`);
      }
      this.bwClass = bwClass;
    } else if (typeof bandOrString === 'string' && !bwClass) {
      const bandNumberPart = bandOrString.match(/\d+/)[0];
      this.band = Number(bandNumberPart);
      this.bwClass = bandOrString.substring(bandNumberPart.length);
      if (!fallbackGroup.includes(this.bwClass)) {
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

export function getIntraBandFallback(caConfigPerCc: CaConfigPerCc): CaConfigPerCc[] {
  return fallbackGroup.filter((bwClass) => bwClass <= caConfigPerCc.bwClass)
                      .map((bwClass) => new CaConfigPerCc(caConfigPerCc.band, bwClass));
}

export function getFallback(caConfigPerCcArr: CaConfigPerCc[]): CaConfigPerCc[][] {
  return combinatorics.cartesianProduct(
    ...caConfigPerCcArr.map((caConfigPerCc) => {
      const intraBandFallback = getIntraBandFallback(caConfigPerCc);
      intraBandFallback.unshift(null);
      return intraBandFallback;
    }),
  ).toArray();
}

if (require.main === module) {
  const argv = process.argv;
  const caConfig = argv[2];
  const caConfigPerCcArr = caConfig.replace('CA_', '').split('-')
                                .map((caConfigPerCc) => new CaConfigPerCc(caConfigPerCc));
  process.stdout.write('Original input\n');
  process.stdout.write(`${caConfig}\n`);
  process.stdout.write('\n');

  const fallbackCombos = getFallback(caConfigPerCcArr);
  process.stdout.write('Cartesian product\n');
  fallbackCombos.forEach((combo) => {
    const comboFiltered = combo.filter((caConfigPerCc) => caConfigPerCc !== null);
    if (!comboFiltered.length) {
      return;
    }
    process.stdout.write(`CA_${comboFiltered.join('-')}\n`);
  });
}
