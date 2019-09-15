import * as combinatorics from 'js-combinatorics';

export abstract class CcConfig {
  public band: number;
  public bwClass: string;
  public fallbackGroup: string[];

  protected abstract toString(): string;
}

export function getIntraBandFallback<T extends CcConfig>(
    ccConfig: T, cls: new(...args: any[]) => T,
  ): T[] {
  return ccConfig.fallbackGroup.filter((bwClass) => bwClass <= ccConfig.bwClass)
                      .map((bwClass) => new cls(ccConfig.band, bwClass));
}

export function getFallback<T extends CcConfig>(
    ccConfigArr: T[], cls: new(...args: any[]) => T,
  ): CcConfig[][] {
  return combinatorics.cartesianProduct(
    ...ccConfigArr.map((ccConfig) => {
      const intraBandFallback = getIntraBandFallback(ccConfig, cls);
      intraBandFallback.unshift(null);
      return intraBandFallback;
    }),
  ).toArray();
}
