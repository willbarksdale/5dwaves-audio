# 5D Waves Audio Files

This repository contains audio files for the 5D Waves meditation app.

## Deployment Instructions

### Current Setup: GitHub-Based Deployment via Cloudflare Pages

The audio files are currently deployed via a GitHub repository connected to Cloudflare Pages.

For future updates, follow these steps:

1. Make changes to audio files locally
2. Commit changes to the local git repository:
   ```
   git add .
   git commit -m "Description of changes"
   ```
3. Push changes to GitHub:
   ```
   git push origin main
   ```
4. Cloudflare Pages will automatically detect the changes and redeploy

### Setting Up GitHub Connection (if not already configured)

If the GitHub remote is not set up, connect it with:
```
git remote add origin https://github.com/YOUR-USERNAME/5dwaves-audio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Alternative: Direct Upload to Cloudflare Pages

If you need to use direct upload instead:

1. Log in to your Cloudflare dashboard
2. Navigate to Pages
3. Select your project
4. Go to "Settings" > "Builds & deployments"
5. Choose "Manual Deployment" 
6. Upload the entire directory
7. Click "Deploy"

## File Structure

- `/audio_manifest.json` - Manifest file with all audio tracks
- `/focus/` - Focus audio tracks
- `/meditate/` - Meditation audio tracks
- `/relax/` - Relaxation audio tracks
- `/sleep/` - Sleep audio tracks
- `/_headers` - CORS and caching configuration 