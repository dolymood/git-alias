var spawnSync = require('child_process').spawnSync
var jsonfile = require('jsonfile')
var config = require('../config.json')
var path = require('path')

var _exec = function (command) {
  var commands = command.split(' && ')
  commands.forEach(function (_cmd) {
    spawnSync('git', _cmd.split(' '), {
      stdio: 'inherit'
    })
  })
}

module.exports = function (command, program) {
  var args = program.args.slice(1)
  var realCommand = config[command]
  if (realCommand) {
    _exec(realCommand)
  } else if (command === 'alias') {
    // create or update alias config
    config[args[0]] = args.concat().slice(1).join(' ')
    jsonfile.writeFileSync(path.join(process.cwd(), './config.json'), config, {
      spaces: 2
    })
  } else {
    // exec git command
    _exec(program.args.join(' '))
  }
}