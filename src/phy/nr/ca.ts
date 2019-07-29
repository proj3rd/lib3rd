import { CcConfig, getFallback } from '../caCommon';

const fallbackGroups = {
  FR1: ['A', 'C', 'D', 'E'],
  FR2: [
    ['A', 'B', 'C'],
    ['A', 'D', 'E', 'F'],
    ['A', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
    ['A', 'O', 'P', 'Q'],
  ],
};

type Fr = 'FR1' | 'FR2';

export class CcConfigNr extends CcConfig {
  public fr: Fr;

  constructor(bandOrString: number | string, bwClass?: string) {
    super();

    if (typeof bandOrString === 'number' && bwClass) {
      this.band = Number(bandOrString);
      if (isNaN(this.band)) {
        throw Error(`bandOrString (${bandOrString}) is not a valid band number`);
      }
      this.fr = getFr(this.band);
      this.bwClass = bwClass;
      this.fallbackGroup = this.getFallbackGroup();
    } else if (typeof bandOrString === 'string' && !bwClass) {
      const bandWithoutN = bandOrString.replace('n', '');
      const bandNumberPart = bandWithoutN.match(/\d+/)[0];
      this.band = Number(bandNumberPart);
      this.fr = getFr(this.band);
      this.bwClass = bandWithoutN.substring(bandNumberPart.length);
      this.fallbackGroup = this.getFallbackGroup();
    } else {
      throw Error('Invalid arguments');
    }
  }

  public getFallbackGroup(): string[] {
    if (this.fr === 'FR1') {
      return fallbackGroups.FR1;
    }
    for (const fallbackgroup of fallbackGroups.FR2) {
      if (fallbackgroup.includes(this.bwClass)) {
        return fallbackgroup;
      }
    }
    throw Error(`band and bwClass (${this.band}${this.bwClass}) is not a valid CC configuration`);
  }

  public toString(): string {
    return `n${this.band}${this.bwClass}`;
  }
}

export function getFr(band: number): Fr {
  return band < 200 ? 'FR1' : 'FR2';
}

if (require.main === module) {
  const argv = process.argv;
  const caConfig = argv[2];
  const ccConfigArr = caConfig.replace('CA_', '').split('-')
                                .map((ccConfig) => new CcConfigNr(ccConfig));
  process.stdout.write('Original input\n');
  process.stdout.write(`${caConfig}\n`);
  process.stdout.write('\n');

  const fallbackCombos = getFallback(ccConfigArr, CcConfigNr);
  process.stdout.write('Cartesian product\n');
  fallbackCombos.forEach((combo) => {
    const comboFiltered = combo.filter((ccConfig) => ccConfig !== null);
    if (!comboFiltered.length) {
      return;
    }
    process.stdout.write(`CA_${comboFiltered.join('-')}\n`);
  });
}
