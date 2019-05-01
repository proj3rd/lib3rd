export class ExtensionMarker {
  public expand(): ExtensionMarker {
    return this;
  }

  public toString(): string {
    return '...';
  }
}
