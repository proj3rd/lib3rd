import { Governor, GovernorFromObject } from "./governor";

export type ParamGovernor = Governor | string;

export function ParamGovernorFromObject(obj: unknown): ParamGovernor {
  if (typeof obj === 'string') {
    return obj;
  }
  return GovernorFromObject(obj);
}
