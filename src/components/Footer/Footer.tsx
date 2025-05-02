import styles from './Footer.module.css';
import cn from "classnames";

export function Footer() {
    return (
        <footer id='contacts' className={cn(styles['footer'])}>
            <div className={cn(styles['container'], 'main-grid')}>
                <div className={styles['menu']}>
                    <a className={cn(styles['menu__item'], styles["link"])} href={"#catalog"}>Каталог</a>
                    <a className={cn(styles['menu__item'], styles["link"])} href={"#about-us"}>О нас</a>
                    <a className={cn(styles['menu__item'], styles["link"])} href={"#reviews"}>Отзывы</a>
                </div>
                <div className={styles['footer__right_block']}>
                    <div className={styles['socials']}>
                        <h3 className={styles['title']}>Мы в соц сетях</h3>
                        <div className={styles['socials__items']}>
                            <a className={cn(styles['socials__item'], styles["link"])} href={"https://t.me/@papalapa_discount"}>Telegram</a>
                            <a className={cn(styles['socials__item'], styles["link"])}>VK</a>
                            <a className={cn(styles['socials__item'], styles["link"])}>Instagram</a>
                        </div>
                    </div>
                    <div className={styles['contacts']}>
                        <h3 className={styles['title']}>Контакты</h3>
                        <div className={styles['contacts__items']}>
                            <a className={cn(styles['contacts__item'], styles["link"])}>papalapa.store@yandex.ru</a>
                            <a className={cn(styles['contacts__item'], styles["link"])}>+7 (904) 189-22-29</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}