import { ElementsFromObject, Elements } from "./elements";

export type IntersectionElements = Elements;

export function IntersectionElementsFromObject(obj: unknown): IntersectionElements {
  return ElementsFromObject(obj);
}
