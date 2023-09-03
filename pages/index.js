import Head from "next/head"

export default function Home({articals}) {
  console.log(articals)
  return (
    <div>
        <Head>
            <title>webDev Newz</title>
            <meta name="keywords" content="web development, programming" />
        </Head>
        <h2>Welcome to Next</h2>
    </div>
  )
}

// we will fetch data below of the main page. 
export  const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articals = await res.json();

  return{
    props : {
      articals
    }
  }
}


