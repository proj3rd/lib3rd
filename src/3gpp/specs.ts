import * as ftp from 'basic-ftp';
import { FileType } from 'basic-ftp';
import { program } from 'commander';
import { join, parse } from 'path';
import { versionFromCharacters } from '../utils';
import { seriesFromSpecNumbering } from '../utils/numbering';

/**
 * @param release Comma-separated release number list
 * @param last Not working. Fetch the last `last` versions for each release
 */
type Options = {
  release?: string;
  last?: number; // TODO
};

const host = 'ftp.3gpp.org';
const basePath = '/Specs/archive';

async function getVersionList(specNumbering: string, options?: Options) {
  const series = `/${seriesFromSpecNumbering(specNumbering)}_series`;
  const path = join(basePath, series, specNumbering);
  const releaseList = options?.release?.split(',').map((release) => Number.parseInt(release));
  const client = new ftp.Client();
  return client.access({
    host,
    user: 'anonymous',
    password: 'anonymous',
  }).then(() => {
    // Get version list
    return client.list(path);
  }).then((fileInfoList) => {
    // Post process FileInfo
    const versionList = fileInfoList
      .filter((fileInfo) => fileInfo.type === FileType.File)
      .map((fileInfo) => {
        const { name, rawModifiedAt } = fileInfo;
        const modifiedAt = new Date(rawModifiedAt.split(' ')[0]);
        const url = `ftp://${host}${path}`;
        return { name, url, modifiedAt };
      });
    return versionList;
  }).then((versionList) => {
    // Filter release
    if (!releaseList || !releaseList.length) {
      return versionList;
    }
    return versionList.filter((version) => {
      const { name: filename } = version;
      const { name } = parse(filename);
      const lastIndexOfHyphen = name.lastIndexOf('-');
      const versionCharacters = name.substring(lastIndexOfHyphen + 1);
      const major = versionFromCharacters(versionCharacters)[0];
      return releaseList.includes(major);
    });
  }).catch((reason) => {
    return Promise.reject(reason);
  }).finally(() => {
    client.close();
  });
}

if (require.main === module) {
  program
    .command('versions <specNumbering>')
    .option('-r, --release <releaseList>')
    .action((specNumbering, options) => {
      const { release } = options;
      getVersionList(specNumbering, { release }).then((versionList) => {
        versionList.forEach((version) => console.log(version));
      }).catch((reason) => {
        console.error(reason);
      });
    });
  program.parse(process.argv);
}
