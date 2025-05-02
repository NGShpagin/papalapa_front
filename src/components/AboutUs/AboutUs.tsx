import styles from "./AboutUs.module.css";
import cn from "classnames";
import {AboutUsItem} from "./AboutUsItem/AboutUsItem.tsx";

export function AboutUs() {
    return (
        <div className={cn(styles['about_us'])}>
            <div className={cn(styles["row_1"])}>
                <AboutUsItem appearance={"small"} type={"image"} image={'src/assets/mask_group.svg'}/>
                <AboutUsItem appearance={"big"} type={"image"} image={'src/assets/image1.jpg'}/>
                <AboutUsItem appearance={"small"} type={"text"}
                             title={"Уникально"}
                             subtitle={"Нет аналогов"}
                             description={"Мы создаём товары, которые не только удобны, но и выглядят эстетично, добавляя уют и гармонию в детской"}
                />
            </div>
            <div className={cn(styles["row_2"])}>
                <AboutUsItem appearance={"small"} type={"text"}
                             title={"Экологично"}
                             subtitle={"4 года на рынке"}
                             description={"В производстве мы используем только натуральные и безопасные ткани, которые бережно заботятся о коже вашего ребёнка"}
                />
                <AboutUsItem appearance={"small"} type={"text"}
                             title={"Качественно"}
                             subtitle={"Личный контроль"}
                             description={"Все материалы имеют сертификаты якачества и соответствуют стандартам экологичности"}
                />
                <AboutUsItem appearance={"big"} type={"image"} image={'src/assets/image2.png'}/>
            </div>
        </div>
    );
}