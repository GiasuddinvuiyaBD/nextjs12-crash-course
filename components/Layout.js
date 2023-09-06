import style from '../styles/Laout.module.css';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';


function Layout({children})
{
    return(
        <>
        <Meta />
        {/* <Nav /> */}
        <div className={style.container}>
            <div className={style.main}>
                <Header />
                {children}
            </div>
        </div>    
        </>
    )
}
export default Layout; 

