const fs = require('fs');
const files = [
  'src/app/duolingo/classes/[id]/page.tsx',
  'src/app/discord/classes/[id]/page.tsx',
  'src/app/coursera/classes/[id]/page.tsx'
];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/'Foundation'/g, "'Beginner'");
    content = content.replace(/'Advanced'/g, "'Advance'");
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
});
