## Learning Git

Use `git init` to start git in a project folder
  `ls -a` shows hidden files in the current directory; we can use this to see the hidden git folder

## git states

git has three different "states"
  1. The Working Directory, contains things we're working on and aren't saved to git yet
  2. The Staging Area, contains info we've added about what goes into the next save / commit
  3. The Git (Repository) Area, that commits the files in the staging area

Basically, the workflow is
  1. Work on files in the working Directory
  2. Add them to the staging Area
  3. Commit files in the staging area

## Controls

`git status` - Displays tracked and untracked files
`git add` - Takes files from the working directory and adds them to the staging area
`git add -A` - Adds all working directory files to the staging area
`git add *.[extension]` - Adds files with a given extension; `git add *.html` would add all html files but nothing else
`git reset HEAD [file]` - Removes a file in the staging area

## Committing

`git commit -m "String" ` - Commits the files in the staging area to the git area. -m allows us to write a description for the commit.
`git log` - Shows log of commit history
