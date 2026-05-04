# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b7a09bf7-0ffe-4ada-9970-924ef86b6894

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b7a09bf7-0ffe-4ada-9970-924ef86b6894) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b7a09bf7-0ffe-4ada-9970-924ef86b6894) and click on Share -> Publish.

## Deploying to GitHub Pages

This repo is now configured for GitHub Pages deployment.

1. Install dependencies:
   ```sh
   npm install
   ```
2. Build the app:
   ```sh
   npm run build
   ```
3. Deploy to GitHub Pages:
   ```sh
   npm run deploy
   ```

A GitHub Actions workflow is also included at `.github/workflows/deploy.yml`. On push to `main` or `master`, it will build the site and publish the `dist` folder to the `gh-pages` branch.

> After the first workflow run, confirm GitHub Pages is set to use the `gh-pages` branch in your repository settings.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
