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
}

export function getIntraBandFallback(caConfigPerCc: CaConfigPerCc): CaConfigPerCc[] {
  return fallbackGroup.filter((bwClass) => bwClass <= caConfigPerCc.bwClass)
                      .map((bwClass) => new CaConfigPerCc(caConfigPerCc.band, bwClass));
}

if (require.main === module) {
  const argv = process.argv;
  const caConfig = argv[2];
  const caConfigPerCcArr = caConfig.replace('CA_', '').split('-')
                                .map((caConfigPerCc) => new CaConfigPerCc(caConfigPerCc));
}
