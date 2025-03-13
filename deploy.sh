#!/bin/bash

# Simple deployment script for Skybox website

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  
  # Start the production server
  echo "🌐 Starting the production server..."
  npm run start
else
  echo "❌ Build failed. Please check the errors above."
  exit 1
fi 