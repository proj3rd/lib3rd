import * as ftp from 'ftp';
import { IVersion, seriesFromString, versionFromString } from '../utils/numbering';

interface ISpecFile extends ftp.ListingElement {
  version: IVersion;
  url: string;
}

const host = 'ftp.3gpp.org';
const baseDir = 'Specs/archive';

export function list(specNumStr: string,
                     cb: (e: Error, specFiles: ISpecFile[], ...args: any[]) => void,
                     ...args: any[]): void {
  const ftpClient = new ftp();
  ftpClient.on('ready', () => {
    const series = seriesFromString(specNumStr);
    const specDir = `${baseDir}/${series}_series/${specNumStr}`;
    ftpClient.list(specDir, (e: Error, l: ftp.ListingElement[]) => {
      ftpClient.end();
      if (e && cb) {
        return cb(e, null, args);
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
      cb(null, specFiles, args);
    });
    return;
  });
  ftpClient.on('error', (e: Error) => {
    cb(e, null, args);
  });
  ftpClient.connect({host});
  return;
}
