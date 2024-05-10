# 01. GitHub Collaboration

**< [Home](../../README.md) / [Week 5](../README.md)**

---

## Protecting the `main` Branch

When working with a team, it's important to protect the `main` branch from accidental changes. This can be done by setting up branch protection rules on GitHub.

**The `main` should only be updated through pull requests. And should only contain working code.**

To protect the `main` branch:

### Step 1

![Protecting the main branch 1](../../assets/protect-branch-1.png)

### Step 2

![Protecting the main branch 2](../../assets/protect-branch-2.png)

## Collaborating and Branching

When working with a team, it's important to create branches for each feature or bug fix. This way, you can work on your changes without affecting the `main` branch.

1. Make sure you're on the `main` branch and that it's up to date. `git pull` if necessary
2. Create a new branch: `git checkout -b feat/new-feature`
3. Make your changes
4. Add and commit your changes: `git add .` and `git commit -m "Adds new feature"`
5. Push your changes to GitHub: `git push origin feat/new-feature`
6. Create a pull request on GitHub
7. On Github, merge the pull request once it's approved and delete the branch. Don't forget to delete the branch on your local machine as well: `git branch -d feat/new-feature`
8. Switch back to the `main` branch: `git checkout main`
9. Pull the latest changes: `git pull`
10. Make sure your branch is up to date with the `main` branch: `git checkout feat/new-feature` and `git merge main`

**Note: Before opening a pull request, make sure your branch is up to date with the `main` branch.**

### Commonly Used Git Commands

- `git add .`: Add all changes
- `git commit -m "Message"`: Commit changes with a message
- `git status`: Check the status of your changes
- `git log`: Check the commit history
- `git stash`: Stash changes
- `git stash pop`: Apply stashed changes
- `git push`: Push your changes to the remote repository
- `git pull`: Pull the latest changes from the remote repository
- `git checkout -b branch-name`: Create a new branch and switch to it
- `git checkout branch-name`: Switch to a branch
- `git branch`: List all branches
- `git branch -d branch-name`: Delete a branch
- `git branch -D branch-name`: Force delete a branch
- `git merge branch-name`: Merge a branch into the current branch

**[Git Cheat Sheet](../../cheatsheets/git-cheatsheet.pdf)**
