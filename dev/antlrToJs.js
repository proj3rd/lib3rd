const fs = require('fs');

if (require.main === module) {
  const lexerPath = process.argv.slice(-1)[0];
  fs.readFile(lexerPath, 'utf8', (errRead, lexerCode) => {
    if (errRead) {
      throw errRead;
    }
    const lexerCodeReplaced = lexerCode.replace(/\bgetCharPositionInLine\b/gm, 'this.getCharIndex');
    fs.writeFile(lexerPath, lexerCodeReplaced, (errWrite) => {
      if (errWrite) {
        throw errWrite;
      }
    });
  });
}
