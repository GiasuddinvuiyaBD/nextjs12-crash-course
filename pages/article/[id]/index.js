import { useRouter } from "next/router";
import Link from "next/link";
import articaleStyle from '../../../styles/Aritcale.module.css';

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
export default article;


// Now i will fetch data by using getServerSideProps
export const getServerSideProps = async (context) =>
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    
   return{
        props : {
            article
        }
    }
}
