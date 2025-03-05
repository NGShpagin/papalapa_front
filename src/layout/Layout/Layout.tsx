import styles from './Layout.module.css';
import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header/Header";

export function Layout() {

    return <div className={styles['page']}>
        {/*<Header/>*/}
        <div className={styles['header']}>
            <Header/>
        </div>
        <div className={styles['content']}>
            <Outlet data-bs-smooth-scroll="true" data-bs-spy="scroll"/>
        </div>
    </div>
}