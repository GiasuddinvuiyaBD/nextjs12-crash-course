import style from '../styles/Laout.module.css';
import Header from './Header';
function Layout({children})
{
    return(
        <div className={style.container}>
            <div className={style.main}>
                <Header />
                {children}
            </div>
        </div>    
    )
}
export default Layout; 

