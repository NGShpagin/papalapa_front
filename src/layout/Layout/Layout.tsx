import styles from './Layout.module.css';
// import {useDispatch} from "react-redux";
import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header/Header.tsx";

export function Layout() {
    // const dispatch = useDispatch<>();

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