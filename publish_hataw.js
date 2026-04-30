import fs from 'fs';
import path from 'path';

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

fs.writeFileSync('hataw_payload.json', JSON.stringify(payload));
