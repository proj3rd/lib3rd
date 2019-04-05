import * as ftp from 'ftp';
import { IVersion, seriesFromString, versionFromString } from '../utils/numbering';

export interface ISpecFile extends ftp.ListingElement {
  version: IVersion;
  url: string;
}

const host = 'ftp.3gpp.org';
const baseDir = 'Specs/archive';

/**
 * Get a collection of spec documents for a given spec number
 * @param specNumStr Specificaiton number, e.g. `38.331`
 * @param cb Callback function
 * @param args Arguments for callback function
 * @param cb.specFiles[] Collection of spec files
 */
export function list(specNumStr: string,
                     cb: (e: Error, specFiles: ISpecFile[], ...args: any[]) => void,
                     ...args: any[]): void {
  const ftpClient = new ftp();
  ftpClient.on('ready', () => {
    const series = seriesFromString(specNumStr);
    const specDir = `${baseDir}/${series}_series/${specNumStr}`;
    ftpClient.list(specDir, (e: Error, l: ftp.ListingElement[]) => {
      ftpClient.end();
      if (e) {
        if (cb) {
          cb(e, null, args);
        }
        return;
      }
      const specFiles: ISpecFile[] = [];
      l.forEach((el: ftp.ListingElement) => {
        const versionString = el.name.split('-').slice(-1)[0].split('.')[0];
        specFiles.push({
          ...el,
          version: versionFromString(versionString),
          url: `ftp://${host}/${specDir}/${el.name}`,
        });
      });
      if (cb) {
        cb(null, specFiles, args);
      }
    });
  });
  ftpClient.on('error', (e: Error) => {
    if (cb) {
      cb(e, null, args);
    }
  });
  ftpClient.connect({host});
}
