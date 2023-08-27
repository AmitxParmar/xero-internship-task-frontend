## Flowchart
### Start

- **[Login]:**
  - User logs in.
  - If successful, user is redirected to the dashboard.

- **[Signup]:**
  - User chooses to sign up.
  - Upon signup, user is redirected to the onboarding page.

### Onboarding Page

- User arrives at the onboarding page.
- User is prompted to select a user type:
  - Default: Developer
  - Organization
  - Company
- User's selected user type is saved to the database.
- User proceeds to the next selection.

### Hosting Selection

- User selects a hosting option:
  - Self Hosting
  - Xerocode Hosting (implementation not specified)

### Self Hosting

- User chooses self hosting.
- User is prompted to choose a hosting provider:
  - AWS Cloud (implementation not specified)
  - GitHub (for GitHub Apps installation)
- If GitHub is selected:
  - User is prompted to install GitHub Apps.
  - Once installation is complete, user is redirected to the dashboard.
### End

# next-template

A Next.js 13 template for building apps with Radix UI and Tailwind CSS.

## Usage

```bash
npx create-next-app -e https://github.com/shadcn/next-template
```

## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
