import Link from 'next/link';
import articaleStyle from '../styles/Aritcale.module.css';

function ArticaleItem({artical})
{
    return(
        <Link href="article/[id]" as={`/article/${artical.id}`} key={artical.id}>
            <div  className={articaleStyle.card}>
                <h3>{artical.id} {artical.title}</h3>
                <p>{artical.body}</p>
            </div>
        </Link>
    );
}
export default ArticaleItem;

