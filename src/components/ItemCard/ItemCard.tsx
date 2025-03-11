import {ItemCardProps} from "./ItemCard.props";
import styles from './ItemCard.module.css';
import cn from "classnames";
import {forwardRef} from "react";

export const ItemCard
    = forwardRef<HTMLDivElement, ItemCardProps>(function ItemCard({...props}, ref) {

    return (
        <div className={styles['item-card']} ref={ref}>
            <div className={styles['content']}>
                <img src={props.image} alt="image" className={styles['image']}/>
                <div className={`main-text ${styles['title']}`}>{props.title}</div>
                <div className={cn(styles['price'], 'text-button-medium')}>{props.price}&nbsp;<span>₽</span></div>
            </div>
            <a className={styles['button']} href={props.wbUrl}>Купить</a>
        </div>
    )
})