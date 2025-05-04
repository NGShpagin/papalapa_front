import {ReviewCompProps} from "./ReviewComp.props.ts";
import styles from './ReviewComp.module.css';
import cn from "classnames";

export function ReviewComp(props: ReviewCompProps) {

    const ratingStars = Array.from({length: props.rating}, (_, index) => {
        return <svg key={index} width="25" height="24" viewBox="0 0 25 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5 20.1167L18.5623 23.7833C19.6725 24.4553 21.0311 23.462 20.7389 22.2057L19.132 15.3107L24.4932 10.6654C25.4719 9.81809 24.946 8.21121 23.6605 8.10895L16.6048 7.51002L13.8439 0.994858C13.3473 -0.18839 11.6527 -0.18839 11.1561 0.994858L8.39515 7.49542L1.33949 8.09434C0.0539875 8.1966 -0.471901 9.80348 0.506835 10.6507L5.86797 15.2961L4.26109 22.1911C3.96893 23.4473 5.32747 24.4407 6.43768 23.7687L12.5 20.1167Z"
                fill="#FFC415" fill-opacity="0.89"/>
        </svg>;
    });

    return (
        <div className={styles['card']}>
            <div className={styles['header']}>
                <div className={styles['left-block']}>
                    <div className={styles['description']}>
                        <div className={styles['reviewer']}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="7.5" fill="#FFFDFB" stroke="#5A4841" stroke-width="5"/>
                            </svg>
                            <p className={cn('main-text')}>{props.reviewerName}</p>
                        </div>
                        <div className={styles['item']}>
                            <p className={cn(styles['item-title'], 'main-text')}>Товар:</p>
                            <p className={cn(styles['item-name'], 'main-text')}>{props.itemName}</p>
                        </div>
                    </div>
                    <div id={'rating'} className={styles['rating']}>{ratingStars}</div>
                </div>
                <div className={cn(styles['image'])}>
                    <img className={'review-image'} src={props.imageUrl} alt="review-image"/>
                </div>
            </div>
            <p className={cn(styles['text'], 'main-text')}>{props.content}</p>
        </div>
    )
}