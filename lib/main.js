var spawnSync = require('child_process').spawnSync
var jsonfile = require('jsonfile')
var path = require('path')
var config = require('../config.json')

var _exec = function (command) {
  var commands = command.split(' && ')
  commands.forEach(function (_cmd) {
    _cmd = _cmd.split(' ').map(function (r) {
      return r.split('жщ').join(' ')
    })
    spawnSync('git', _cmd, {
      stdio: 'inherit'
    })
  })
}

module.exports = function (command, program) {
  var originArgs = program.args.slice(0, program.args.length - 1)
  var args = originArgs.slice(1)
  var realCommand = config[command]
  if (realCommand) {
    if (realCommand.match(/commit\s/)) {
      args = args.map(function (message) {
        return message.split(' ').join('жщ')
      })
    }

    _exec(realCommand + ' ' + args.join(' '))
  } else if (command === 'alias') {
    // create or update alias config
    config[args[0]] = args.concat().slice(1).join(' ')
    jsonfile.writeFileSync(path.join(process.cwd(), './config.json'), config, {
      spaces: 2
    })
  } else {
    // exec git command
    _exec(originArgs.join(' '))
  }
}
