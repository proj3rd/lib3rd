import { AsnType } from '../classes/asnType';
import { ObjectClass } from '../classes/objectClass';
export interface IMsgIe {
    name: string;
    definition: AsnType | ObjectClass;
}
