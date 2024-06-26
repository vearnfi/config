#!/bin/bash

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

# Get the absolute path of the current directory
CURRENT_DIR=$(pwd)

# Remove the file name from the directory path
CURRENT_DIR=$(dirname "$CURRENT_DIR")

echo "Absolute path of the current directory: $CURRENT_DIR"

# Define the package name and projects
PACKAGE_NAME="@vearnfi/config"
PROJECTS=(
  "client"
  "contracts"
  "events-fetcher"
  "firebase/functions"
)

# Function to update the package in a given project
update_package() {
  local project_path=$1
  echo "Updating $PACKAGE_NAME in $project_path"

  # Navigate to the project directory
  cd $CURRENT_DIR/$project_path || { echo "Directory $project_path not found!"; exit 1; }

  nvm use 18

  if [ "$project_path" = "contracts" ]; then
    # Install the package in development mode for contracts project
    npm install --save-dev "$PACKAGE_NAME@latest"
  else
    # Otherwise, install normally
    npm install "$PACKAGE_NAME@latest"
  fi

    # Check for errors
  if [ $? -eq 0 ]; then
    echo "Successfully updated $PACKAGE_NAME in $project_path"

    # Stage all changes
    git add --all

    # Commit changes with a message
    git commit -m "Updated $PACKAGE_NAME package"

    # Push changes to the current branch
    git push origin "$(git rev-parse --abbrev-ref HEAD)"

    echo "Changes committed and pushed to $(git rev-parse --abbrev-ref HEAD) branch."
  else
    echo "Failed to update $PACKAGE_NAME in $project_path"
  fi
}

# Loop through all projects and update the package
for project in "${PROJECTS[@]}"; do
  update_package "$project"
done

echo "All projects have been updated."
