import cn from "classnames";
import styles from './AboutUsItem.module.css';
import {AboutUsItemProps} from "./AboutUsItem.props.ts";

export function AboutUsItem({...props}: AboutUsItemProps) {
    return (
        <div className={cn(styles["item"], {
            [styles['item-big']]: props.appearance === "big",
            [styles['item-small']]: props.appearance === "small",
            [styles['item-text']]: props.type === "text",
            [styles['item-image']]: props.type === "image"
        })}>
            {props.type === "text" && <div className={cn(styles['item__content'])}>
                <div className={cn(styles["item__header"])}>
                    <p className={cn(styles["item__title"])}>{props.title}</p>
                    <p className={cn(styles["item__subtitle"])}>{props.subtitle}</p>
                </div>
                <p className={styles["item__description"]}>{props.description}</p>
            </div>}
            {props.type === "image" && <img src={props.image} alt={"image"}/>}
        </div>
    )
}