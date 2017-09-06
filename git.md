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
`git add .` - Adds all files not staged for commit
`git reset HEAD [file]` - Removes a file in the staging area
`git clone [url]` - Copies an existing directory from, say, a github repo

## Committing

`git commit -m "String" ` - Commits the files in the staging area to the git area. -m allows us to write a description for the commit.
`git log` - Shows log of commit history

## Ignore files
  1. First, add a .gitignore file to the project
  2. Add the filename of the file we want to ignore to the .gitignore
  3. We can also ignore directories by using [directory]/ (Note that directories show up as name/ in git status, which is why we do this)

## Branches

Up to here, git has been a linear affair; we have one branch with various commits along the timeline

[Initial commit] -- [commit] -- [commit] -- ...

We can also use branches to maybe add new features, or testing new code while not affecting the master branch. Then, we can later merge the branch into the master if we want to keep the changes.    
                            ----[branch commit] -- [commit] ...
                           /                                  /
                          /                                  /
[Initial commit] ------ [commit] -- [commit] ......  [merged] ------ [commit]

`git branch` - Lists all Branches
`git checkout -b [branch]` - Creates a new branch
`git checkout [branch]` - Switches to the given branch
`git merge [branch]` - Creates a new commit that combines the given branch and the current branch with their changes and commits
`git branch -d [branch]` - Deletes a branch

## Checking out commits

1. Use `git log` to get log history, and grab the hash key of an earlier commit you want to view.
2. run `git checkout [hash]`
3. We can work from an earlier commit without overwriting our master by using `git checkout -b [branch hash]`
4. Once we're done looking at the commit, we can run `git checkout master` to go back

## Hosting on GitHub

1. Create a new repo on GitHub.
2. Take the given HTTPS link, and plug it into `git remote add origin [url]` in the cmd, and run `git remote -v` to check.
3. Run `git push` to push the commit to GitHub, or `git push origin master` to ensure the master branch commit is pushed.
