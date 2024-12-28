import styles from './ItemCategory.module.css';
import {ItemCategoryProps} from "./ItemCategory.props.ts";
import cn from "classnames";
import {useEffect, useState} from "react";
import {Item} from "../../interfaces/Item.ts";
import {Image} from "../../interfaces/Image.ts";

export function ItemCategory(props: ItemCategoryProps) {

    const [activeColor, setActiveColor] = useState<Item | undefined>(props.colorList ? props.colorList[0] : undefined);
    const mainImage = activeColor?.imageList?.find(i => i.isMain);
    const [activeColorImage, setActiveColorImage] = useState<Image | undefined>(mainImage ? mainImage : (activeColor?.imageList ? activeColor.imageList[0] : undefined));
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemCycles = Array.from({length: activeColor?.imageList?.length || 1}, (_, index) => {
        return <div onMouseOver={() => changeImage(index)} key={index} className={cn(styles['item-cycle'], {
            [styles['item-cycle__active']]: activeIndex === index,
        })}/>
    });

    useEffect(() => {
        setActiveColorImage(activeColor?.imageList?.find(i => i.isMain));
        if (activeColor?.imageList && activeColorImage) {
            console.log(activeColor);
            console.log(activeColorImage)
            setActiveIndex(activeColor?.imageList?.findIndex(i => i.id === activeColorImage.id));
            console.log("activeIndex: " + activeIndex);
        }
    }, [activeColor]);

    const changeImage = (index: number) => {
        console.log("index: " + index)
        if (activeColor?.imageList) {
            console.log("index - 1: " + index)
            setActiveColorImage(activeColor?.imageList[index])
            console.log("activeColorImage: " + activeColorImage)
            setActiveIndex(index);
            console.log("activeIndex: " + activeIndex)
        }
    }


    return (
        <div className={styles['item-card']}>
            <div className={cn(styles['image-box'])}>
                <img id={'image-container'} className={styles['image']} src={activeColorImage?.imageUrl} alt="image"/>
                <div className={styles['image-cycle-box']}>{itemCycles}</div>
                <a className={cn(styles['button-el'], 'main-text')} href={activeColor?.wbUrl}>Купить</a>
            </div>
            <div className={styles['description']}>
                <div className={cn(styles['title'], 'main-text')}>{props.title}</div>
                <div className={styles['color-box']}>
                    {props.colorList?.map(item => {
                        const color = props.colorList?.find(color => color.id === item.id);
                        if (!color) {
                            return;
                        }
                        return (<div className={cn(styles['color'], {
                            [styles['active-color']]: activeColor?.id === item.id
                        })} style={{backgroundColor: color.colorValue}}
                                     onClick={() => setActiveColor(color)}/>)
                    })}
                </div>
                <div className={cn(styles['price'], 'text-button-medium')}>{activeColor?.price}&nbsp;
                    <span>₽</span></div>
            </div>

        </div>
    )
}