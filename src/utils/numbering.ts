export function seriesFromSpecNumbering(specNumbering: string) {
  return specNumbering.split('.')[0];
}

export function versionFromCharacters(chars: string) {
  const step = chars.length === 3 ? 1 : /* chars.length === 6 */ 2;
  const version = [];
  for (let i = 0; i < 3; i += 1) {
    const charsField = chars.substring(i * step, i * step + step);
    if (charsField.length === 1) {
      if (charsField < 'a') {
        version.push(+charsField);
      } else {
        version.push(10 + charsField.charCodeAt(0) - 'a'.charCodeAt(0));
      }
    } else {
      // charsField.length === 2
      version.push(+charsField);
    }
  }
  return version;
}
