import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Choice } from "./choice";
import { Reference } from "./reference";

function IntersectionFromObject(obj: unknown): Choice | Reference {
  const { csnTypeChoice } = obj as Partial<Choice>;
  if (csnTypeChoice) {
    return Choice.fromObject(obj);
  }
  const { csnTypeReference } = obj as Partial<Reference>;
  if (csnTypeReference) {
    return Reference.fromObject(obj);
  }
  throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
}

export class Intersection {
  public intersection: Choice | Reference;

  public csnTypeIntersection = true;

  constructor(intersection: Choice | Reference) {
    this.intersection = intersection;
  }

  public static fromObject(obj: unknown): Intersection {
    const { intersection: intersectionObj, csnTypeIntersection } = obj as Intersection;
    if (!csnTypeIntersection) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const intersection = IntersectionFromObject(intersectionObj);
    return new Intersection(intersection);
  }
}
