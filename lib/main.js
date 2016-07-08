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
  var _oArgs = program.rawArgs
  var originArgs = _oArgs.slice(_oArgs.indexOf(command))
  var args = originArgs.slice(1)
  var realCommand = config[command]
  if (realCommand) {
    if (realCommand.match(/commit\s/)) {
      args = args.map(function (message) {
        return message.split(' ').join('жщ')
      })
    }
    if (command.charAt(0).toUpperCase() === command.charAt(0)) {
      // command is uppercase then replace ${x} with args
      var repIndex = -1
      realCommand = realCommand.replace(/\$(\d+)/g, function (m, num) {
        repIndex = num = num - 1
        return args[num] || ''
      })
      if (repIndex > -1) {
        args = args.slice(repIndex + 1)
      }
    }
    if (args.length) {
      realCommand = realCommand + ' ' + args.join(' ')
    }
    _exec(realCommand)
  } else if (command === 'alias') {
    // create or update alias config
    config[args[0]] = args.concat().slice(1).join(' ')
    jsonfile.writeFileSync(path.join(__dirname, '../config.json'), config, {
      spaces: 2
    })
  } else {
    // exec git command
    _exec(originArgs.join(' '))
  }
}
