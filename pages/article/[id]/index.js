import { useRouter } from "next/router";
import Link from "next/link";
import articaleStyle from '../../../styles/Aritcale.module.css';
import { server } from "../../../config";

function article({article})
{
    let id = article.id;
    
    return(
        <>
           <div  className={articaleStyle.card}>
                <h3>{article.id} {article.title}</h3>
                <p>{article.body}</p>
            </div>
            <br /> 
            <Link href='/'>Go Back</Link>
        </>
    )
}



// Now i will fetch data by using getServerSideProps
export const getStaticProps = async (context) =>
{
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    
   return{
        props : {
            article
        }
    }
}

export const getStaticPaths = async () => 
{
    const res = await fetch(`${server}/api/articles`); 
    const article = await res.json(); 

    const ids = article.map((article) => article.id)
    const paths = ids.map(id => ({params : {id : id.toString()}}))

    return {
        paths,
        fallback : false
    }
}


export default article;