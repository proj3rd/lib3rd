export class ExtensionMarker {
  public static getInstance() {
    return ExtensionMarker.instance;
  }

  private static instance: ExtensionMarker = new ExtensionMarker();

  private extensionMarkerTag: undefined;

  private constructor() {}
}
