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
alias <name> [value]    create or update alias (<name>=[value]) config
a                       add
aa                      add .
br                      branch
bra                     branch --all
brr                     branch --remote
cl                      clone
clr                     clone --recursive
cm                      commit -a -m
cmd                     commit -a -m "auto commit by git-alias"
ch                      checkout
chb                     checkout -b
Chb                     checkout -b $1 origin/$1
Chb2                    checkout -b $1 origin/$2
chm                     checkout master
chms                    checkout master && submodule foreach git checkout master
chd                     checkout develop
chds                    checkout develop && submodule foreach git checkout develop
Chs                     checkout $1 && submodule foreach git checkout $1
cf                      config
cfl                     config --list
di                      diff
dic                     diff --cached
fe                      fetch
feo                     fetch origin
lg                      log --stat --color
lgg                     log --graph --color
me                      merge
med                     merge develop
mem                     merge master
pl                      pull origin
plm                     pull origin master
plms                    pull origin master && submodule foreach git pull origin master
pld                     pull origin develop
plds                    pull origin develop && submodule foreach git pull origin develop
Pls                     pull origin $1 && submodule foreach git pull origin $1
ps                      push origin
psm                     push origin master
psms                    push origin master && submodule foreach git push origin master
psd                     push origin develop
psds                    push origin develop && submodule foreach git push origin develop
Pss                     push origin $1 && submodule foreach git push origin $1
re                      remote
rea                     remote add
reset                   remote set-url
rb                      rebase
rba                     rebase --abort
rbc                     rebase --continue
rbi                     rebase -i
rs                      reset
rsh                     reset HEAD
rshh                    reset HEAD --hard
st                      status
sts                     status -s
stsb                    status -sb
sta                     stash
staa                    stash apply
stad                    stash drop
stal                    stash list
stap                    stash pop
sm                      submodule
smi                     submodule init
smu                     submodule update
help [cmd]              display help for [cmd]
```

__ Note: __

  If the `command` is uppercase, then ${index} will be replaced by args.

  ```
  g Chb2 test master => git checkout -b test origin/master
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
