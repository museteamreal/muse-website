const { execSync } = require('child_process');
try {
  execSync('git show HEAD:src/App.tsx > src/App_backup.tsx');
  execSync('git show HEAD:src/index.css > src/index_backup.css');
  console.log('Done');
} catch (e) {
  console.error(e);
}
