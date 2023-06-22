# thermal-rising-pwa

## Description

### PWA for Thermal Rising

## Getting started.

- Clone repo

- Package manager used for this project is [pnpm](https://pnpm.io/). So, be sure to download this first.

- Install node-modules:
  `pnpm install`

### Pnpm terminal commands

- Updates all dependencies to their latest versions, regardless of the version ranges specified in the package.json file:
  `pnpm update --latest`

- Update specific dependency:
  `pnpm update <package-name> --latest`

- Updates all dependencies to their latest versions that satisfy the version ranges specified in the package.json file.
  `pnpm update`

**NOTE**:
It’s important to know that updating dependencies can sometimes introduce breaking changes, so it’s a good idea to thoroughly test your project after updating dependencies to ensure that everything still works as expected.

- Add package to project:
  `pnpm add <package-name>`

  - Add devDependency:
    `pnpm add --dev <package-name>`

- Removes a specific package from the project and updates the package.json and pnpm-lock.yaml files accordingly.
  `pnpm remove <package-name>`

**References**:

- [pnpm Docs](https://pnpm.io/motivation)

## Configuration files

### stylelint:

- https://stylelint.io/user-guide/rules/
- https://github.com/stylelint/awesome-stylelint#readme

### jest:

- https://nextjs.org/docs/pages/building-your-application/optimizing/testing#setting-up-jest-with-babel
- https://jestjs.io/docs/configuration
- https://testing-library.com/docs/react-testing-library/intro/
- Next router mock:
  - https://github.com/scottrippey/next-router-mock

## Prisma schema

Download and install [Docker](https://www.docker.com/)
You many need to enable virtualization in your BIOS settings.

These are the steps you will need to take each time you want to start the database. Once schema is more finalized I will create an image for it.

Start up the database image:

```bash
docker-compose up
```

Migrate schema and generate the Prisma client:

```bash
npx prisma migrate dev
npx prisma generate
```

Finally seed the database:

```bash
npx prisma db seed
```

To test the database locally, run this to spam you terminal with a the seed data:

```bash
node prisma/seedTest.js
```

## Create T3 App template

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
