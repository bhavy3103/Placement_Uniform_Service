#!/bin/bash

# Define color codes for messaging
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to display messages in different colors
print_info() {
  echo -e "${BLUE}$1${NC}"
}

print_success() {
  echo -e "${GREEN}$1${NC}"
}

print_warning() {
  echo -e "${YELLOW}$1${NC}"
}

print_error() {
  echo -e "${RED}$1${NC}"
}

# Define the project directories
CLIENT_DIR="./client"
SERVER_DIR="./server"

# Function to install dependencies
install_dependencies() {
  local dir="$1"
  print_info "Installing dependencies in $dir..."
  cd "$dir" || { print_error "Failed to navigate to $dir"; exit 1; }
  npm install > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully in $dir."
  else
    print_error "Failed to install dependencies in $dir."
    exit 1
  fi
  cd ..
}

# Function to start the server
start_server() {
  print_info "Starting the server..."
  cd "$SERVER_DIR" || { print_error "Failed to navigate to $SERVER_DIR"; exit 1; }
  npm start &
  SERVER_PID=$!
  cd ..
}

# Function to start the client
start_client() {
  print_info "Starting the client..."
  cd "$CLIENT_DIR" || { print_error "Failed to navigate to $CLIENT_DIR"; exit 1; }

  # Check if 'npm run dev' is the correct command
  if grep -q '"dev":' package.json; then
    npm run dev &
  else
    print_warning "'dev' script not found in package.json. Trying 'start' instead."
    npm start &
  fi
  
  CLIENT_PID=$!
  cd ..
}

# Install dependencies for server and client
install_dependencies $SERVER_DIR
install_dependencies $CLIENT_DIR

# Start server and client
start_server
start_client

# Wait for both processes to complete
print_info "Waiting for server and client processes to complete..."
wait $SERVER_PID
wait $CLIENT_PID

print_success "Both client and server have been started successfully."