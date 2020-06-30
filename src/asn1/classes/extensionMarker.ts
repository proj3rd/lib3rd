import { IExpandOption } from '../expander';
import { Modules } from './modules';

export class ExtensionMarker {
  public static getInstance() {
    return ExtensionMarker.instance;
  }

  private static instance: ExtensionMarker = new ExtensionMarker();

  private extensionMarkerTag: undefined;

  private constructor() {}

  public expand(
    modules: Modules,
    expandOption: IExpandOption
  ): ExtensionMarker {
    return this;
  }

  public toString(): string {
    return '...';
  }
}
