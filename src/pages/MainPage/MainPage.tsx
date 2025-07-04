import styles from './MainPage.module.css';
import {Link} from "react-router-dom";
import CarouselBoot from "../../components/Carousel/CarouselBoot";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {useEffect, useRef, useState} from "react";
import cn from "classnames";
import axios, {AxiosError} from 'axios';
import {PREFIX} from "../../helpers/API";
import {ItemCategory} from "../../interfaces/ItemCategory";
import {CategoriesList} from "../../components/CategoryList/CategoriesList";
import {CheckboxCircle} from "../../components/CheckboxCircle/CheckboxCircle";
import {ReviewList} from "../../components/ReviewList/ReviewList";
import {Review} from "../../interfaces/Review";
import {Footer} from "../../components/Footer/Footer";
import {SelectItem} from "../../interfaces/SelectItem";
import {WbItem} from "../../interfaces/WbItem.ts";

export function MainPage() {

    const [active, setActive] = useState<boolean>(false);
    const itemCard = useRef(null);
    const circleButton_1 = useRef(null);
    const circleButton_2 = useRef(null);
    const circleButton_3 = useRef(null);
    const [itemCategories, setItemCategories] = useState<ItemCategory[]>([]);
    // const [error, setError] = useState<string>();
    const [isCategoriesLoading, setIsCategoriesLoading] = useState<boolean>(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [activeItem, setActiveItem] = useState<SelectItem | null>(null);
    const [isEventListenerRunning, setIsEventListenerRunning] = useState<boolean>(false);
    const items: SelectItem[] = [
        {
            id: 1,
            title: 'Плед с мехом',
            price: null,
            wbUrl: 'https://www.wildberries.ru/catalog/197562165/detail.aspx?targetUrl=GP',
            image: 'https://storage.yandexcloud.net/papalapa-storage/PL01G_0.jpeg',
            nmID: 197562165
        },
        {
            id: 2,
            title: 'Плед с мехом',
            price: null,
            wbUrl: 'https://www.wildberries.ru/catalog/180833812/detail.aspx?targetUrl=GP',
            image: 'https://storage.yandexcloud.net/papalapa-storage/PL01B_0.jpeg',
            nmID: 180833812
        },
        {
            id: 3,
            title: 'Плед с мехом',
            price: null,
            wbUrl: 'https://www.wildberries.ru/catalog/180833814/detail.aspx?targetUrl=GP',
            image: 'https://storage.yandexcloud.net/papalapa-storage/PL01C_0.jpeg',
            nmID: 180833814
        }
    ]

    const getEl = () => {
        return document.getElementById('itemCard');
    }

    useEffect(() => {
        getItemCategories().then(res => {
            if (res != null) {
                setItemCategories(res.filter((item) => item.colorList && item.colorList.length > 0));
            }
        });
        getReviews().then(res => {
            if (res != null) setReviews(res);
        });
    }, [reviews.length]);

    const activateItem = async (id: number) => {
        const item = items.find(item => item.id === id)
        if (item != undefined) {
            const wbItem = await getSelectedItem(item.nmID)
            if (wbItem != null) item.price = wbItem.sizes[0].discountedPrice;
            setActiveItem(item)
            setActive(true)
        }
        if (!isEventListenerRunning) {
            document.addEventListener('click', outsideClickListener)
            setIsEventListenerRunning(true);
        }
    }

    const outsideClickListener = function(e: MouseEvent) {
        const container = document.getElementById('itemCard');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (container != null && !container.contains(e.target) && e.target !== circleButton_1.current
            && e.target !== circleButton_2.current
            && e.target !== circleButton_3.current) {
            setActive(false);
            document.removeEventListener('click', outsideClickListener)
            setIsEventListenerRunning(false)
        }
    }

    const getItemCategories = async () => {
        try {
            setIsCategoriesLoading(true);
            const {data} = await axios.get<ItemCategory[]>(`${PREFIX}/products/wb-items`);
            setIsCategoriesLoading(false);
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                // setError(e.message);
                return null;
            }
            setIsCategoriesLoading(false);
            return null;
        }
    };

    const getReviews = async () => {
        try {
            const {data} = await axios.get<Review[]>(`${PREFIX}/reviews`);
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                // setError(e.message);
                return null;
            }
            return null;
        }
    };

    const getSelectedItem = async (filterNmId: number) => {
        try {
            const {data} = await axios.get<WbItem>(`${PREFIX}/products/wb-items?filterNmID=${filterNmId}`);
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return null;
            }
            return null;
        }
    }

    return (
        <>
            <div className={styles['carousel-block']}>
                <CarouselBoot/>
            </div>
            <div id="catalog" className={styles['hits-block']}>
                <div className={styles['hits-header']}>
                    <h2 className={cn(styles['hits-text'])}>Каталог</h2>
                    {/*<Link className={styles['see-all']} to={'/catalog'}>*/}
                    {/*    <div className={styles['see-all__text']}>Смотерть все</div>*/}
                    {/*    <img src="/src/assets/arrow-icon.svg" alt="arrow-icon"/>*/}
                    {/*</Link>*/}
                </div>
                {!isCategoriesLoading && itemCategories.length > 0 && <CategoriesList items={itemCategories}/>}
                {/*{error && <div>{error}</div>}*/}
                <div className={styles['hits-description']}>
                    Тепло в деталях, забота в каждой ниточке
                </div>
            </div>
            <div className={styles['select-block']}>
                <img className={styles['select-block__image']} src="https://storage.yandexcloud.net/papalapa-storage/website/select-block.png" alt=""/>
                <CheckboxCircle ref={circleButton_1} className={cn(styles['button-1'])}
                                onClick={() => activateItem(1)} element={() => getEl()}/>
                <CheckboxCircle ref={circleButton_2} className={cn(styles['button-2'])}
                                onClick={() => activateItem(2)} element={() => getEl()}/>
                <CheckboxCircle ref={circleButton_3} className={cn(styles['button-3'])}
                                onClick={() => activateItem(3)} element={() => getEl()}/>
                {active && activeItem != null &&
                    <div id={'itemCard'} ref={itemCard}  className={styles['card']}>
                        <ItemCard id={activeItem.id} title={activeItem.title} price={activeItem.price}
                                  image={activeItem.image} wbUrl={activeItem.wbUrl}/>
                    </div>}
            </div>
            <div id="about-us" className={styles['about-block']}>
                <div className={styles['about-block__container']}>
                    <div className={cn(styles['about-block__brick'], styles['first-brick'])}>
                        <div className={styles['about-block__header']}>
                            <h2 className={styles['brick-header-text']}>Экологично</h2>
                            <h4 className={cn(styles['about-block__h4'])}>4 года на рынке</h4>
                        </div>
                        <p className={cn(styles['about-block__brick-p'], 'main-text')}>В производстве мы используем
                            только
                            натуральные и безопасные ткани, которые бережно заботятся о коже вашего ребёнка</p>
                    </div>
                    <hr className={styles['about-block__hr']} style={{height: '458px'}}/>
                    <div className={cn(styles['about-block__brick'], styles['empty-brick'])}/>
                    <hr className={cn(styles['about-block__hr'])} style={{height: '558px'}}/>
                    <div className={cn(styles['about-block__brick'], styles['third-brick'])}>
                        <div className={styles['about-block__header']}>
                            <h2 className={styles['brick-header-text']}>Качественно</h2>
                            <h4 className={styles['about-block__h4']}>Личный контроль</h4>
                        </div>
                        <p className={cn(styles['about-block__p'], 'main-text')}>Все материалы имеют сертификаты
                            якачества и
                            соответствуют стандартам экологичности</p>
                    </div>
                    <hr className={styles['about-block__hr']} style={{height: '402px'}}/>
                    <div className={cn(styles['about-block__brick'], styles['last-brick'])}>
                        <div className={styles['about-block__header']}>
                            <h2 className={styles['brick-header-text']}>Уникально</h2>
                            <h4 className={styles['about-block__h4']}>Нет аналогов</h4>
                        </div>
                        <p className={cn(styles['about-block__p'], 'main-text')}>Мы создаём товары, которые не только
                            удобны,
                            но и выглядят эстетично, добавляя уют и гармонию в детской</p>
                    </div>
                </div>
                <div className={styles['about-block__footer']}>
                    <div className={styles['about-block__image']}/>
                    <div className={styles['about-block__description']}>
                        <div className={styles['about-block__description__header']}>
                            <div className={cn(styles['about-block__h2'], 'h2')}>О нас</div>
                            <div className={cn(styles['about-block__p'], 'main-text')}>PAPALAPA — российский бренд
                                детского текстиля,
                                созданный для заботы о малыше. Мы используем только экологичные материалы и контролируем
                                каждый этап производства, чтобы обеспечить высокое качество и безопасность. Наши изделия
                                —
                                это сочетание уюта, эстетики и заботы о вашем ребёнке.
                            </div>
                        </div>
                        <Link className={cn(styles['about-block__link'])} to={'/about'}>
                            <div className={cn(styles['certificates'], 'text-button')}>Сертификаты</div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.3536 15.3536C23.5488 15.1583 23.5488 14.8417 23.3536 14.6464L20.1716 11.4645C19.9763 11.2692 19.6597 11.2692 19.4645 11.4645C19.2692 11.6597 19.2692 11.9763 19.4645 12.1716L22.2929 15L19.4645 17.8284C19.2692 18.0237 19.2692 18.3403 19.4645 18.5355C19.6597 18.7308 19.9763 18.7308 20.1716 18.5355L23.3536 15.3536ZM7 15.5H23V14.5H7V15.5Z"
                                    fill="#584B45" fill-opacity="0.5"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles['image_block']}></div>
            <div id={'reviews'} className={cn(styles['reviews-block'], 'placeholder-glow')}>
                <ReviewList reviews={reviews} header={"Отзывы"}/>
            </div>
            <Footer/>
        </>
    )
}