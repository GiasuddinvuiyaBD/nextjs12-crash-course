import Artical from "../components/Articale"
import { server } from "../config";

export default function Home({articals}) {
  return (
    <div>
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
