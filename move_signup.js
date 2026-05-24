const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace('export default function App()', 'export default function SignUp()');
fs.writeFileSync('src/app/pages/SignUp.tsx', appContent);
console.log('Moved to SignUp.tsx');
