import { todo, unimpl } from 'unimpl';

export type RAT = 'E-UTRA' | 'NR';
export const RAT_EUTRA = 'E-UTRA';
export const RAT_NR = 'NR';

interface IParamArfcnNr {
  freqLow: number; // kHz. Inclusive
  freqHigh: number; // kHz. Exclusive
  freqRefOffset: number; // kHz
  stepFreqGlobal: number; // kHz
  arfcnRefOffset: number;
  arfcnLow: number; // Inclusive
  arfcnHigh: number; // Inclusive
}

const paramArfcnNrList: IParamArfcnNr[] = [
  // 3GPP TS 38.101-1 clause 5.4.2.1
  {
    freqLow: 0,
    freqHigh: 3000000,
    freqRefOffset: 0,
    stepFreqGlobal: 5,
    arfcnRefOffset: 0,
    arfcnLow: 0,
    arfcnHigh: 599999,
  },
  {
    freqLow: 3000000,
    freqHigh: 24250000,
    freqRefOffset: 3000000,
    stepFreqGlobal: 15,
    arfcnRefOffset: 600000,
    arfcnLow: 600000,
    arfcnHigh: 2016666,
  },
  // 3GPP TS 38.101-2 clause 5.4.2.1
  {
    freqLow: 24250000,
    freqHigh: 100000000,
    freqRefOffset: 24250080,
    stepFreqGlobal: 60,
    arfcnRefOffset: 2016667,
    arfcnLow: 2016667,
    arfcnHigh: 3279165,
  },
];

export function toHz(arfcn: number, rat: RAT): number {
  switch (rat) {
    case RAT_EUTRA: {
      return unimpl();
      break;
    }
    case RAT_NR: {
      return todo();
      break;
    }
    default: {
      return unimpl();
    }
  }
}
