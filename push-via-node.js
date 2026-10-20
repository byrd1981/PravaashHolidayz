const { execSync } = require('child_process');
const path = require('path');

const projectDir = 'e:\\Bhavin\\Projects\\TourismForVishal\\Site\\tourm';
process.chdir(projectDir);

console.log('===== GIT STATUS =====');
try {
  const status = execSync('git status', { encoding: 'utf-8' });
  console.log(status);
} catch (e) {
  console.error('Error getting status:', e.message);
}

console.log('\n===== GIT LOG (last 2 commits) =====');
try {
  const log = execSync('git log --oneline -2', { encoding: 'utf-8' });
  console.log(log);
} catch (e) {
  console.error('Error getting log:', e.message);
}

console.log('\n===== FETCHING FROM REMOTE =====');
try {
  const fetch = execSync('git fetch origin main', { encoding: 'utf-8' });
  console.log(fetch || 'Fetch complete');
} catch (e) {
  console.error('Error fetching:', e.message);
}

console.log('\n===== PUSHING TO REMOTE (force-with-lease) =====');
try {
  const push = execSync('git push origin main --force-with-lease', { encoding: 'utf-8' });
  console.log(push || 'Push complete');
} catch (e) {
  console.error('Error pushing:', e.message);
}

console.log('\n===== FINAL LOG (last 2 commits) =====');
try {
  const finalLog = execSync('git log --oneline -2', { encoding: 'utf-8' });
  console.log(finalLog);
} catch (e) {
  console.error('Error getting final log:', e.message);
}

console.log('\n===== DONE =====');
