import headerStyle from '../styles/Header.module.css'

function Header()
{
    const x = 3;
    return(
        <>
           <h1 className={headerStyle.title}><span>WebDev</span> Newz
           </h1>
           <p className={headerStyle.description}>Keep up to data with the latest web dev news</p>
        </>
    )
}
export default Header