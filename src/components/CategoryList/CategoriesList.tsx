import type {CategoriesListProps} from "./CategoriesList.props";
import {ItemCategory} from "./ItemCategory/ItemCategory";
import styles from './CategoriesList.module.css'

export function CategoriesList({items}: CategoriesListProps) {
    return <div className={styles['wrapper']}>{items?.map(item => (
        <ItemCategory
            key={item.id}
            id={item.id}
            title={item.title}
            colorList={item.colorList}>
        </ItemCategory>
    ))}
    </div>;
}