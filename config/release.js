/* eslint-disable no-console */
var execSync = require('child_process').execSync;

module.exports = {
  afterPush: function(project, versions) {
    runCommand('ember github-pages:commit --message "Released ' + versions.next + '"');
    runCommand('git push origin gh-pages:gh-pages');
  }
};

function runCommand(command) {
  console.log('running: ' + command);
  var output = execSync(command, { encoding: 'utf8' });
  console.log(output);
}
