#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Check if argument is provided
if [ -z "$1" ]; then
    print_error "Version bump type is required!"
    echo "Usage: npm run bump [patch|minor|major|prepatch|preminor|premajor|prerelease|<version>]"
    echo ""
    echo "Examples:"
    echo "  npm run bump patch       # 0.0.1 -> 0.0.2"
    echo "  npm run bump minor       # 0.0.1 -> 0.1.0"
    echo "  npm run bump major       # 0.0.1 -> 1.0.0"
    echo "  npm run bump 1.2.3       # Set to specific version"
    exit 1
fi

VERSION_TYPE=$1

# Check if git working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    print_error "Git working directory is not clean. Please commit or stash your changes first."
    exit 1
fi

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
print_info "Current version: $CURRENT_VERSION"

# Bump version using npm version (without git tag as we'll create it ourselves)
print_info "Bumping version to $VERSION_TYPE..."
npm version $VERSION_TYPE --no-git-tag-version

if [ $? -ne 0 ]; then
    print_error "Failed to bump version"
    exit 1
fi

# Get new version
NEW_VERSION=$(node -p "require('./package.json').version")
print_success "Version bumped to $NEW_VERSION"

# Stage the changes
print_info "Staging changes..."
git add package.json package-lock.json 2>/dev/null || git add package.json

# Commit the changes
print_info "Creating commit..."
git commit -m "chore: bump version to $NEW_VERSION"

if [ $? -ne 0 ]; then
    print_error "Failed to create commit"
    exit 1
fi

# Create git tag
print_info "Creating git tag v$NEW_VERSION..."
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"

if [ $? -ne 0 ]; then
    print_error "Failed to create git tag"
    exit 1
fi

print_success "Successfully bumped version from $CURRENT_VERSION to $NEW_VERSION"
print_success "Created git tag: v$NEW_VERSION"
echo ""
print_info "To push changes and tags, run:"
echo "  git push && git push --tags"

