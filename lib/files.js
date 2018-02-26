const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectory: () => process.cwd(),

  getCurrentDirectoryBase: () => path.basename(process.cwd()),

  getProjectName: () => (
    fs.readFile(
      path.join(process.cwd(), '..', '..', 'package.json'),
      'utf8',
      (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data).name);
      },
    )
  ),

  directoryExists: (filePath) => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },

  fileExists: (filePath) => {
    try {
      return fs.statSync(filePath).isFile();
    } catch (err) {
      return false;
    }
  },
};
