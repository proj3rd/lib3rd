export function normalize(csn1: string): string {
  return csn1
    .replace(/(':: ='|': :=')/g, '::=')
    .replace(/\uF07B/g, '{')
    .replace(/\u2013/g, '--')
    .replace(/\u00AC/g, '')
    // `<RTTI USF Mode :_ bit(1)>` to `<RTTI USF Mode : bit(1)>`
    .replace(':_', ':')
    .trim();
}
