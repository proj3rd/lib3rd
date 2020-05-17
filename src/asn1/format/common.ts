import { AsnType } from '../classes/asnType';
import { ObjectClass } from '../classes/objectClass';
import { ObjectSet } from '../classes/objectSet';

export interface IMsgIe {
  name: string;
  definition: AsnType | ObjectClass | ObjectSet;
}
