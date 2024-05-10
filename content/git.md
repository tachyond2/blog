# terminology

1.bare repository
2.object: tree blob commit
3.local branch and remote branch

# before we have git

vesion control system
source control system

# head

指向分支最近一次提交
detached head 指向没有分支的提交

## 修改最近 commit 的 message

<!-- working directory:project_blog -->
<!-- current branch: master -->

git log -1
git commit --amend

# 修改老旧 commit 的 message

## 把连续多个 commit 整理成一个

git rebase -i <p_commit>
squash <commit> Add style.css
squash <commit> Add js
squash <commit> Add refering project

git log --graph --one-line

## 把间隔几个 commit 整理成一个

git rebase -i <p_commit>
pick <commit> add readme.md
squash <commit> add readme
squash <commit> rename file readme to readme.md

## 怎么比较放在暂存区的文件和 HEAD 所指提交中对应文件的差异

git add <modified_file>
git diff --cached

## 怎么比较工作区文件和 在暂存区中对应文件的差异

git diff <!-- all modified file -->
git diff -- <modified_file>

## 如何让暂存区恢复和 HEAD 所指的最近一次提交一样

git reset HEAD
git diff --cached <!-- verify -->

## 如何把工作区恢复成和暂存区一样

discard change in working directory
git checkout -- <file_change_to_discard_1> < <file_change_to_discard_2>

## 如何恢复暂存区部分文件跟 HEAD 一样

changes to be committed:
modified: styles/style.css
modeifed: index.html

git reset HEAD --

## 消除最近的几次提交

HEAD is now at 1999 Add experiment
git log --grpah
commit 1999
Add experiment
commit 5bf3
Add test
commit 9c68
Add index + logo
git reset --hard
HEAD is now at 9c68 Add index + logo
git log --graph

## 看看不同提交[不同分支]的指定文件的差异

git diff master temp index.html

## 不需要 git 管理的文件

.gitignore

# git 传输协议
