import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import cn from 'classnames';

export function Header() {

    return (
        <header className={cn(styles['header'], 'main-grid')}>
            <NavLink to={'/'} className={styles['logo']}>
                papalapa
            </NavLink>
            <div className={styles['menu']}>
                <a className={cn(styles['link'])} href={"#catalog"}>Каталог</a>
                <a className={cn(styles['link'])} href={"#about-us"}>О нас</a>
                <a className={cn(styles['link'])} href={"#reviews"}>Отзывы</a>
                <a className={cn(styles['link'])} href={"#contacts"}>Контакты</a>
                {/*<NavLink to={'/catalog'} className={({isActive}) => cn(styles['link'], {*/}
                {/*    [styles.active]: isActive*/}
                {/*})}>Каталог</NavLink>*/}
                {/*<NavLink to={'/about'} className={({isActive}) => cn(styles['link'], {*/}
                {/*    [styles.active]: isActive*/}
                {/*})}>О нас</NavLink>*/}
                {/*<NavLink to={'/certificates'} className={({isActive}) => cn(styles['link'], {*/}
                {/*    [styles.active]: isActive*/}
                {/*})}>СЕРТИФИКАТЫ</NavLink>*/}
                {/*<NavLink to={'/contacts'} className={({isActive}) => cn(styles['link'], {*/}
                {/*    [styles.active]: isActive*/}
                {/*})}>Контакты</NavLink>*/}
            </div>
            <a className={styles['wb']} href={'https://www.wildberries.ru/brands/310991209-papalapa'}>
                {/*<img src="/src/assets/cart-icon.svg" alt="cart-icon"/>*/}
                <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.46624 12L0 0H1.55981L4.209 9.77344H4.3328L7.03151 0H8.76463L11.4633 9.77344H11.5871L14.2363 0H15.7961L12.3299 12H10.7453L7.94759 2.4375H7.84855L5.0508 12H3.46624Z"
                        fill="#2D2421"/>
                    <path
                        d="M17.1859 12V0H21.6177C22.5007 0 23.2291 0.144531 23.8027 0.433594C24.3762 0.71875 24.8033 1.10352 25.0839 1.58789C25.3645 2.06836 25.5048 2.60156 25.5048 3.1875C25.5048 3.70312 25.4079 4.12891 25.2139 4.46484C25.0241 4.80078 24.7724 5.06641 24.4588 5.26172C24.1493 5.45703 23.813 5.60156 23.4498 5.69531V5.8125C23.8377 5.83594 24.2277 5.96484 24.6197 6.19922C25.0117 6.43359 25.3398 6.76953 25.6039 7.20703C25.868 7.64453 26 8.17969 26 8.8125C26 9.41406 25.8556 9.95508 25.5667 10.4355C25.2779 10.916 24.8219 11.2969 24.1988 11.5781C23.5757 11.8594 22.7648 12 21.7662 12H17.1859ZM18.7209 10.7109H21.7662C22.769 10.7109 23.4808 10.5273 23.9017 10.1602C24.3267 9.78906 24.5392 9.33984 24.5392 8.8125C24.5392 8.40625 24.4299 8.03125 24.2112 7.6875C23.9925 7.33984 23.6809 7.0625 23.2765 6.85547C22.8721 6.64453 22.3935 6.53906 21.8405 6.53906H18.7209V10.7109ZM18.7209 5.27344H21.5682C22.0303 5.27344 22.4471 5.1875 22.8185 5.01562C23.194 4.84375 23.4911 4.60156 23.7098 4.28906C23.9326 3.97656 24.0441 3.60937 24.0441 3.1875C24.0441 2.66016 23.8501 2.21289 23.4622 1.8457C23.0743 1.47461 22.4595 1.28906 21.6177 1.28906H18.7209V5.27344Z"
                        fill="#2D2421"/>
                </svg>
            </a>
        </header>
    )
}