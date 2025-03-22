import Carousel from 'react-bootstrap/Carousel';
import {Button} from "../Button/Button";
import styles from './Carousel.module.css'
import {useMediaQuery} from "@uidotdev/usehooks";

function CarouselBoot() {
    const isMobileDevice = useMediaQuery("(390px <= width < 768px)");
    // const isDesktop_1280 = useMediaQuery("(768px <= width < 1280px)");
    // const isDesktop_1440 = useMediaQuery("(1280px <= width < 1440px)");
    // const isDesktop_1920 = useMediaQuery("(1440px <= width)");

    return (
        <div className={styles['carousel-block']}>
            {/*<h3 className={styles['text']}>С заботой о самых близких</h3>*/}
            <Button className={styles['button']}>Купить</Button>
            <Carousel controls={true} indicators={true} fade={true} slide={isMobileDevice}
                      className={styles['carousel']}>
                <Carousel.Item interval={3000} className={styles['carousel-item']}>
                    {!isMobileDevice ? <div className={styles['image_box']}>
                            <img
                                className="d-block h-100 w-50"
                                src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-image-1-1.jpeg"
                                alt="First slide"
                            />
                            <img
                                className="d-block h-100 w-50"
                                src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-image-1-2.jpeg"
                                alt="First slide"
                            />
                        </div> :
                        <div className={styles['image_box']}>
                            <img
                                className="d-block w-100 h-100 object-fit-cover"
                                src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-1_768.jpeg"
                                alt="First slide"
                            />
                        </div>
                    }
                    <Carousel.Caption>
                        {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className={styles['carousel-item']}>
                    <div className={styles['image_box']}>
                        <img
                            className="d-block w-100 h-100 object-fit-cover"
                            src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-image-2.jpeg"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        {/*<h3>С заботой о самых близких</h3>*/}
                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                        {/*<Button>Купить</Button>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className={styles['carousel-item']}>
                    {!isMobileDevice ? <div className={styles['image_box']}>
                            <img
                                className="d-block w-50 h-100 align-content-center"
                                src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-image-3-1.jpeg"
                                alt="Third slide"
                            />
                            <img
                                className="d-block w-50 h-100 align-content-center"
                                src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-image-3-2.jpeg"
                                alt="Third slide"
                            />
                        </div> :
                        <div className={styles['image_box']}>
                            <img
                                className="d-block w-100 h-100 object-fit-cover"
                                src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-image-3-2.jpeg"
                                alt="First slide"
                            />
                        </div>
                    }
                    <Carousel.Caption>
                        {/*<h3>С заботой о самых близких</h3>*/}
                        {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                        {/*<Button>Купить</Button>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className={styles['carousel-item']}>
                    <div className={styles['image_box']}>
                        <img
                            className="d-block w-100 h-100 object-fit-cover"
                            src="https://storage.yandexcloud.net/papalapa-storage/website/carousel-image-4.png"
                            alt="Fourth slide"
                        />
                    </div>
                    <Carousel.Caption>
                        {/*<h3>С заботой о самых близких</h3>*/}
                        {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                        {/*<Button>Купить</Button>*/}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselBoot;