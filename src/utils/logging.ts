import * as log from 'loglevel';
try {
  log.setLevel(process.env.loglevel as log.LogLevelDesc);
} catch (e) {
  log.setLevel('SILENT');
}

export {
  log,
};
