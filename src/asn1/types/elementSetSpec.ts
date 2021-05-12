import { Unions } from "../classes/unions";

export type ElementSetSpec = Unions;

export function ElementSetSpecFromObject(obj: unknown): ElementSetSpec {
  return Unions.fromObject(obj);
}
