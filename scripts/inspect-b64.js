const fs = require('fs');
const path = require('path');
for (const name of ['koto-coffee.b64', 'hana-hair.b64']) {
  const p = path.join(__dirname, '..', 'public', 'works', name);
  const content = fs.readFileSync(p, 'utf8');
  const numbers = content.match(/\d+/g)?.map(Number);
  console.log(name, 'numbers', numbers?.length);
  if (!numbers?.length) continue;
  const header = numbers.slice(0, 16);
  console.log('header', header.join(','));
  const idx = numbers.findIndex((v, i) => i > 0 && numbers.slice(i, i + 8).join(',') === '137,80,78,71,13,10,26,10');
  console.log('png idx', idx);
  if (idx >= 0) {
    console.log('png header at idx', idx, numbers.slice(idx, idx + 16).join(','));
  }
  const out = Buffer.from(numbers);
  console.log('out length', out.length);
  console.log('out magic', out.slice(0, 8).toString('hex'));
}
