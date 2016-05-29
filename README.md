# git-alias

A git alias Node.js package

## Install

```shell
npm i -g git-alias
```

## Usage

```shell
g [command]
```

Commands: 

```shell
alias <name> <value>    create or update alias (<name>=<value>) config
st                      status
br                      branch
cm                      commit -a -m
cmd                     commit -a -m "auto commit by git-alias"
a                       add
aa                      add .
ch                      checkout
chm                     checkout master
chms                    checkout master && submodule foreach git checkout master
chd                     checkout develop
chds                    checkout develop && submodule foreach git checkout develop
pl                      pull origin
plm                     pull origin master
plms                    pull origin master && submodule foreach git pull origin master
pld                     pull origin develop
plds                    pull origin develop && submodule foreach git pull origin develop
ps                      push origin
psm                     push origin master
psms                    push origin master && submodule foreach git push origin master
psd                     push origin develop
psds                    push origin develop && submodule foreach git push origin develop
me                      merge
med                     merge develop
mem                     merge master
cmm                     commit -a -m "default commit"
help [cmd]              display help for [cmd]
```

## About add or update default alias config

Just: 

```shell
g alias meCm 'commit -am "me message"'
```

Then

```shell
g meCm
```
