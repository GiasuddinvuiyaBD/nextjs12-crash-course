import articalStyle from '../styles/Aritcale.module.css'
import ArticaleItem from './ArticaleItem'
function Artical({articals})
{
    return(
        <div className={articalStyle.grid}>
          {
            articals.map((artical) =>
            {
                return <ArticaleItem  artical={artical} /> 
            })
          }
        </div>
    )
}
// <h3 className={articalStyle.card} key={artical.id}>{artical.id} {artical.title}</h3>
export default Artical
