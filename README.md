This is a [Next.js](https://nextjs.org/) template

## Cloning

```
  git clone --depth 1 --branch <tag_name> git@github.com:deivisondc/nextjs-template.git <new_repo_name>

  cd <new_repo_name>
  rm -Rf .git

  git init
  git add .
  git commit -m "first commit"
  git branch -M main
  git remote add origin <new_repo_url>
  git push -u origin main
```

### Tags

- base: contains the eslint / prettier / typescript config
- chakra-ui: contains base + [chakra-ui](https://chakra-ui.com/)
- tailwind: contains base + [tailwind](https://tailwindcss.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
