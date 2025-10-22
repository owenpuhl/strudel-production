# GitHub Repository Setup Guide

Follow these steps to push your Strudel Electroclash project to GitHub.

## Prerequisites

1. **Git installed** on your computer
   - Windows: Download from [git-scm.com](https://git-scm.com)
   - Mac: `brew install git` or use Xcode Command Line Tools
   - Linux: `sudo apt install git` (Ubuntu/Debian) or `sudo yum install git` (Fedora/RHEL)

2. **GitHub account**
   - Sign up at [github.com](https://github.com) if you don't have one

## Step 1: Initialize Git Repository Locally

Open your terminal/command prompt and navigate to the project folder:

```bash
cd path/to/strudel-electroclash-project
```

Initialize a new Git repository:

```bash
git init
```

Add all files to staging:

```bash
git add .
```

Create your first commit:

```bash
git commit -m "Initial commit: Electroclash/Witchpop Strudel framework"
```

## Step 2: Create GitHub Repository

### Option A: Using GitHub Website (Easiest)

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `strudel-electroclash-project` (or your preferred name)
   - **Description:** "Live coding framework for electroclash/witchpop in Strudel REPL"
   - **Public** or **Private** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Option B: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create strudel-electroclash-project --public --source=. --remote=origin
```

## Step 3: Connect Local Repository to GitHub

After creating the GitHub repository, you'll see instructions. Copy the remote repository URL.

Add the remote repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/strudel-electroclash-project.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

Set the default branch to `main`:

```bash
git branch -M main
```

## Step 4: Push to GitHub

Push your code to GitHub:

```bash
git push -u origin main
```

You may be prompted to enter your GitHub credentials:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your account password)

### Creating a Personal Access Token

If you need to create a token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Git CLI access"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Step 5: Verify Upload

Visit your repository on GitHub:

```
https://github.com/YOUR_USERNAME/strudel-electroclash-project
```

You should see all your files including:
- ✅ README.md (will display on the main page)
- ✅ main-beat.js
- ✅ chord-progressions.js
- ✅ examples/ folder with 3 example files
- ✅ LICENSE
- ✅ .gitignore

## Making Future Updates

After making changes to your code:

```bash
# Check what changed
git status

# Add specific files
git add filename.js

# Or add all changes
git add .

# Commit with a message
git commit -m "Add new chord progression examples"

# Push to GitHub
git push
```

## Using SSH Instead of HTTPS (Optional)

For easier authentication without tokens:

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. Add to SSH agent:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

3. Add public key to GitHub:
   - Copy key: `cat ~/.ssh/id_ed25519.pub`
   - GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste and save

4. Change remote URL:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/strudel-electroclash-project.git
```

## Common Issues

### Authentication Failed
- Use a Personal Access Token instead of your password
- Or set up SSH keys

### Permission Denied
- Make sure you're the owner of the repository
- Check that your username is correct in the remote URL

### Files Not Showing
- Make sure you committed: `git status` should show "nothing to commit"
- Make sure you pushed: `git push`

### Large Files
- Strudel code is all text, so size shouldn't be an issue
- If adding audio samples later, consider Git LFS

## Next Steps

1. **Add topics to your repository** for discoverability:
   - live-coding
   - strudel
   - electroclash
   - music-production
   - javascript
   - tidalcycles

2. **Enable GitHub Pages** (optional) to host documentation

3. **Add a CONTRIBUTING.md** if you want others to contribute

4. **Create Issues** to track features and bugs

5. **Add GitHub Actions** for automated testing (advanced)

## Resources

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

Happy coding! 🎵✨
