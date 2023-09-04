import articalStyle from '../styles/Aritcale.module.css'
import ArticaleItem from './ArticaleItem'; 

function Artical({articals})
{
    return(
        <div className={articalStyle.grid}>
          {
            articals.map((artical) =>
            {
                return <ArticaleItem key={artical.id}  artical={artical} /> 
            })
          }
        </div>
    );
}

export default Artical;

