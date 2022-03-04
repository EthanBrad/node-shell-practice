let required = require('./pwd');
let lsRequired = require ('./ls')
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    required();

  }
  else if (cmd === 'ls'){
    lsRequired()
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})
