import styles from './Footer.module.css';
import cn from "classnames";

export function Footer() {
    return (
        <footer id='contacts' className={cn(styles['footer'])}>
            <div className={cn(styles['container'])}>
                <div className={styles['footer-head']}>
                    <div className={styles['logo']}>papalapa</div>
                    <div className={styles['menu']}>
                        <a className={cn(styles['link'])} href={"#catalog"}>Каталог</a>
                        <a className={cn(styles['link'])} href={"#about-us"}>О нас</a>
                        <a className={cn(styles['link'])} href={"#reviews"}>Отзывы</a>
                        {/*<a className={cn(styles['link'])} href={"#contacts"}>Контакты</a>*/}
                    </div>
                </div>
                <div className={styles['footer-foot']}>
                    <div className={styles['socials']}>
                        <h3 className={styles['heading']}>Мы в соц сетях</h3>
                        <div className={styles['socials-items']}>
                            <a className={styles['item']} href={"https://t.me/@papalapa_discount"}>Telegram</a>
                            <a className={styles['item']}>VK</a>
                            <a className={styles['item']}>Instagram</a>
                        </div>
                    </div>
                    <div className={styles['contacts']}>
                        <h3 className={styles['heading']}>Контакты</h3>
                        <div className={styles['contacts-items']}>
                            <a className={styles['item']}>papalapa.store@yandex.ru</a>
                            <a className={styles['item']}>+7 (904) 189-22-29</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}