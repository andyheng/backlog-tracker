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
`git add`
