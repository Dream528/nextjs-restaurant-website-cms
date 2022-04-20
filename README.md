## Restaurant Website with Next.js and Cosmic

To build this app, we’re going to use the following technologies:

[Next.js](https://nextjs.org/docs) - A React framework that makes it easy to spin up a full-stack application.
[Cosmic](https://www.cosmicjs.com/) - A Headless CMS that gives us the ability to quickly manage our content.
[Sass](https://sass-lang.com/) -  A stable, and powerful professional-grade CSS extension language.

### Links
[Install the App Template -](https://www.notion.so/url) 
[Check out the code](https://github.com/naira-ge/nextjs-restaurant-cms)
[View the live demo](https://nextjs-restaurant-cms.vercel.app/)


### Screenshots
![template](https://user-images.githubusercontent.com/34789741/163723056-ec8c570c-59e4-414c-9f74-d421af5bb484.gif)

## Getting started

First, install the dependencies with
```bash
npm install
# or
yarn 
```

Then run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Environment Variables

You'll need to create an .env file in the root of the project. Loging to Cosmic and from Bucket Settings > API Access take the following values:

```bash
BUCKET_SLUG=your_cosmic_bucket_slug
READ_KEY=your_cosmic_read_key
WRITE_KEY=your_cosmic_write_key
```

## Deploy on Vercel

Use the following link to deploy to [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). You will need to add API accesss keys as environment variables. Find these in Bucket Settings > API Access.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Your feedback and contributions are welcome!
