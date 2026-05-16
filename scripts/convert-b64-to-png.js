const fs = require('fs');
const path = require('path');
const files = ['koto-coffee.b64', 'hana-hair.b64'];
for (const name of files) {
  const sourcePath = path.join(__dirname, '..', 'public', 'works', name);
  const targetPath = sourcePath.replace(/\.b64$/, '.png');
  const content = fs.readFileSync(sourcePath, 'utf8');
  const numbers = content.match(/\d+/g)?.map(Number);
  if (!numbers?.length) {
    console.error(`Unable to parse numeric bytes from ${sourcePath}`);
    continue;
  }
  const buffer = Buffer.from(numbers);
  fs.writeFileSync(targetPath, buffer);
  console.log(`Wrote ${targetPath} (${buffer.length} bytes)`);
}
