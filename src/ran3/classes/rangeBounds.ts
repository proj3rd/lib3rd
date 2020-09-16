import { IRangeBound } from '../types';

export class RangeBounds {
  public rangeBoundList: IRangeBound[];

  constructor(rangeBoundList: IRangeBound[]) {
    this.rangeBoundList = rangeBoundList;
  }
}
