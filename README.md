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

### Routting system
> One of the best thing about nextjs is routing system.
> We don't need third pary router.
> if we want to make router just we can pust the file inside the pages folder. 
> basically inside the pages folder we need to make router of our applications.
> new i will be a about.js page router

### view page source
Now we are added some <Head> </Head> inside of it i have added title and meta tag. If we want to see the value of our specific page it's possible. But if i create any application with react-react-app or regular clined side application i am not gonne see the content into the source code or view page. Just we will be able to see the main or root file. Next js is very good for ESO.


### convention
1. Every latter should be lowercase for pages. 
2. For Other component for files we have to use CameleCase convention. 


## Layout & css Modules

_app.js : If we want to share our design and content every pages. In that situation we can use that coponent inside the _app.js. inside the page we can use globel css.

### Components
1. Inside the component i will take a file call Layout.js
2. I will change Home.module.css to Layout.module.css
3. Modify the _app.js


### create a Header component and design 

### Some jsx 
written some jsx one our file. 

## Custom Document
A custom Document can update the <html> and <body> tags used to render a Page.
To override the default Document, create the file pages/_document as shown below:
```
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

```
    Good to know
    - _document is only rendered on the server, so event handlers like onClick cannot be used in this file.

    - <Html>, <Head />, <Main /> and <NextScript /> are required for the page to be properly rendered.
```

## Data fetching in next
For fetching data in nextJS. We have to fetch our main file i mean index.js file. 
we can fetch data above the index.js file or below the index.js file. 

For fetching data in nextjs we can use three seperate method.
1. getStaticProps which is gonne fetch it build time
2. getServerSideProps it will allow is to fatch data every request which will be slower.
3. getStaticPast to dynamically generate past bese on data were fetching. 



## getStaticProps
using getStaticProps we are getting data 


## Showing data to the UI. 
We have showed data to ui. For showing data to ui i have taken two component
1. Articale
2. ArticaleItem

In articale we have taken data from index then we looped it. Ater that we passed the all data to the ArticaleItem. Inside the articaleItem we showed the data into UI. 



