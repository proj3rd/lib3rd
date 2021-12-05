import { Choice } from "./choice";
import { Reference } from "./reference";

export class Intersection {
  public intersection: Choice | Reference;

  public csnTypeIntersection = true;

  constructor(intersection: Choice | Reference) {
    this.intersection = intersection;
  }
}
