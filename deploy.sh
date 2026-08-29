#!/bin/bash
# deploy.sh — Run this on your VPS to deploy/update US Policy Brief
# Usage: bash deploy.sh
set -e

echo "🚀 Deploying US Policy Brief..."

# Pull latest code
git pull origin main

# Build the new image
echo "🔨 Building Docker image..."
docker compose -f docker-compose.prod.yml build app

# Restart app with zero-downtime (DB stays up)
echo "♻️  Restarting app container..."
docker compose -f docker-compose.prod.yml up -d --no-deps app

# Remove dangling images to save disk space
docker image prune -f

# Warm the cache on startup
echo "🔥 warming cache..."
sleep 5
curl -s -o /dev/null http://localhost/ || true
sleep 2
curl -s -o /dev/null http://localhost/ || true

echo "✅ Deployment complete!"
echo "📋 Logs: docker compose -f docker-compose.prod.yml logs -f app"
