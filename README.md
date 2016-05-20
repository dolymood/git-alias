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
alias <name> [value]  create or update alias (<name>=[value]) config
st                    git status
br                    git branch
cm                    git commit -a -m
a                     git add
aa                    git add .
ch                    git checkout
chm                   git checkout master
chms                  git checkout master && git submodule foreach git check out master
chd                   git checkout develop
chds                  git checkout develop && git submodule foreach git checkout develop
pl                    git pull origin
plm                   git pull origin master
plms                  git pull origin master && git submodule foreach git pull origin master
pld                   git pull origin develop
plds                  git pull origin develop && git submodule foreach git pull origin develop
ps                    git push origin
psm                   git push origin master
psms                  git push origin master && git submodule foreach git push origin master
psd                   git push origin develop
psds                  git push origin develop && git submodule foreach git push origin develop
me                    git merge
med                   git merge develop
mem                   git merge master
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
