This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

### Component Details

#### Showcase Component

This component takes 1 mandetory prop and two optional props. When the component is in the mobile view, It will show only one Card per row. This component uses the function `getShowcaseData` to fetch data from the API with Next.js SSR features.

- numberOfItems - This is the mandetory prop and it represents the API data limit.
- category - This is an optional prop which is for category selections. When there is no category option it will show all the category related data.
- columns - This prop controls the number of Cards of a particular row.

#### ProductCard Component

This component take product data as product prop and based on the data it will change the component design.
