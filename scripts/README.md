# Version Bump Script

This directory contains scripts for managing the project's version and releases.

## bump-version.sh

Automatically bumps the version in `package.json`, creates a git commit, and tags the release.

### Usage

```bash
# Bump patch version (0.0.1 -> 0.0.2)
npm run bump patch

# Bump minor version (0.0.1 -> 0.1.0)
npm run bump minor

# Bump major version (0.0.1 -> 1.0.0)
npm run bump major

# Set to specific version
npm run bump 1.2.3

# Pre-release versions
npm run bump prepatch      # 0.0.1 -> 0.0.2-0
npm run bump preminor      # 0.0.1 -> 0.1.0-0
npm run bump premajor      # 0.0.1 -> 1.0.0-0
npm run bump prerelease    # 0.0.1-0 -> 0.0.1-1
```

### What it does

1. **Validates**: Checks that your git working directory is clean
2. **Bumps**: Updates the version in `package.json` (and `package-lock.json` if present)
3. **Commits**: Creates a commit with the message `chore: bump version to X.Y.Z`
4. **Tags**: Creates an annotated git tag `vX.Y.Z`
5. **Outputs**: Provides instructions for pushing changes

### Publishing Flow

After bumping the version:

```bash
# Push the changes and tags to remote
git push && git push --tags

# Publish to npm (if applicable)
npm publish
```

### Requirements

- Clean git working directory (no uncommitted changes)
- Node.js installed
- Git installed

### Notes

- The script follows [Semantic Versioning](https://semver.org/)
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/)
- The iOS Podspec automatically reads the version from `package.json`

