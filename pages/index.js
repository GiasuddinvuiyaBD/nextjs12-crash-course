import Head from "next/head"
import Artical from "../components/Articale"
import { server } from "../config";

export default function Home({articals}) {
  return (
    <div>
        <Head>
            <title>webDev Newz</title>
            <meta name="keywords" content="web development, programming" />
        </Head>
        <h2>Welcome to Next</h2>
       <Artical articals={articals} />
    </div>
  )
}

// we will fetch data below of the main page. 

export  const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articals = await res.json();

  return{
    props : {
      articals
    }
  }
}
