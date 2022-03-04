let lsRequired = require('./ls');
let required = require('./pwd');
let catRequired = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  let cmdArr = [];
  if (cmd.includes(' ')) {
    cmdArr = cmd.split(' ');
  }

  if (cmd === 'pwd') {
    required();
  }
  if (cmd === 'ls') {
    lsRequired();
  }
  if (cmdArr[0] === 'cat') {
    catRequired(cmdArr[1]);
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})

