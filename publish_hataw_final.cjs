const fs = require('fs');
const http = require('https');

const filesToPublish = [
  'index.html',
  'App.tsx',
  'index.tsx',
  'package.json',
  'tsconfig.json',
  'types.ts',
  'vite.config.ts',
  'components/Artboard.tsx',
  'components/Header.tsx',
  'components/History.tsx',
  'components/Hotbar.tsx',
  'components/Sidebar.tsx',
  'data/referenceLibrary.ts',
  'services/geminiService.ts',
  'utils/imageProcessing.ts'
];

const payload = {
  files: filesToPublish.map(filePath => {
    return {
      path: filePath,
      encoding: 'utf8',
      body: fs.readFileSync(filePath, 'utf8')
    };
  })
};

const data = JSON.stringify(payload);

const options = {
  hostname: 'hataw.dev',
  port: 443,
  path: '/api/v1/publish/quick',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  let responseBody = '';
  res.on('data', d => {
    responseBody += d;
  });
  res.on('end', () => {
    console.log(responseBody);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
