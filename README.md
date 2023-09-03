This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

npm run build # it will build out for our production
# or
yarn run build # it will build out for our production 

npm run start # it will build for our local machine
# or
yarn run start # it will build for our local machine
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<!-- Befor learning nextJS -->

## pre-request

- Creating Component
- Using JSX
- Passing Props
- Using state

## What is nextJS
> Next js is a React frontent development web framework by vercel (formaly zeit)
> that enable functionality as sever-side rendering and static side generation

## Server-Side Rendering
Unlike a traditional React App where the entire Application is loaded and rendered on the clined,
Next.js allowes the first page load to be rendered by the server, which is great for SEO & performance.


## Others benifits of nextJS
- Easy page ruting
- API Routes
- Out of the box TypeScript and sass
- Static site generation (next export)
- Easy Deployment



## Let's learn Next.js

### Installation
``` 
    Next.js 12
   npx create-next-app@12 project_name
```

## Folder exploring
1. Public Folder basicaly a static folder anything we put in here that are directly accessible form  the browser.

2. Style Folder. There are so many different way to write css. we can see globals.css this file we can use anywere of our application. Another file is specific css. Home.module.css it means this is a specific css for Home page. When we need to write css for any specific file or component in that time we can use Componentname.module.css

3. pages folder. index.js is four main file