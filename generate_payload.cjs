const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(distDir);

const payload = {
  slug: 'fuzzy-canvas-97yz',
  files: allFiles.map(filePath => {
    const relativePath = path.relative(distDir, filePath);
    return {
      path: relativePath,
      encoding: 'utf8',
      body: fs.readFileSync(filePath, 'utf8')
    };
  })
};

fs.writeFileSync('hataw_payload.json', JSON.stringify(payload));
console.log('Payload generated from dist folder.');
