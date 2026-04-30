import fs from 'fs';
import path from 'path';
import https from 'https';

const DIST_DIR = path.join(process.cwd(), 'dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error("Error: dist/ directory not found. Please run 'npm run build' first.");
  process.exit(1);
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const allFilePaths = getAllFiles(DIST_DIR);
const filesPayload = allFilePaths.map(filePath => {
  const relativePath = path.relative(DIST_DIR, filePath);
  // Simple check if it's text or binary
  const ext = path.extname(filePath).toLowerCase();
  const isBinary = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.eot'].includes(ext);
  
  return {
    path: relativePath,
    encoding: isBinary ? 'base64' : 'utf8',
    body: fs.readFileSync(filePath, isBinary ? 'base64' : 'utf8')
  };
});

const payload = JSON.stringify({ files: filesPayload });

const options = {
  hostname: 'hataw.dev',
  port: 443,
  path: '/api/v1/publish/quick',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, res => {
  let responseBody = '';
  res.on('data', d => responseBody += d);
  res.on('end', () => {
    console.log('\n========= HATAW DEPLOYMENT RESPONSE =========\n');
    try {
      const data = JSON.parse(responseBody);
      if (data.ok) {
         console.log(`✅ Deployment Successful!`);
         console.log(`🌍 Live URL:   ${data.siteUrl}`);
         console.log(`🔑 Claim URL:  ${data.claimUrl || 'N/A (already claimed or none provided)'}`);
         console.log(`🗑️ Delete URL: ${data.deleteUrl}`);
         console.log(`🎫 Delete Tkn: ${data.deleteToken}`);
         
         // Write outputs for Github Actions
         if (process.env.GITHUB_OUTPUT) {
            fs.appendFileSync(process.env.GITHUB_OUTPUT, `site_url=${data.siteUrl}\n`);
            fs.appendFileSync(process.env.GITHUB_OUTPUT, `claim_url=${data.claimUrl || ''}\n`);
         }
      } else {
         console.error(`❌ Deployment Failed:`, data);
      }
    } catch (e) {
      console.error('Raw response:', responseBody);
    }
    console.log('\n=============================================\n');
  });
});

req.on('error', error => {
  console.error('Request Error:', error);
  process.exit(1);
});

req.write(payload);
req.end();
