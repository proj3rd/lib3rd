import { cloneDeep } from 'lodash';
import { AsnType } from './classes/asnType';
import { IMsgIe } from './format/common';
import { IModules } from './visitors/modules';

export function expand(msgIe: IMsgIe, asn1Pool: IModules): IMsgIe {
  const msgIeClone = cloneDeep(msgIe);
  const parameterList = msgIeClone.definition instanceof AsnType ? msgIeClone.definition.parameterList : [];
  msgIeClone.definition =  msgIeClone.definition.expand(asn1Pool, undefined, parameterList) as any /* TODO */;
  return msgIeClone;
}
