import Carousel from 'react-bootstrap/Carousel';
import {Button} from "../Button/Button.tsx";
import styles from './Carousel.module.css'

function CarouselBoot() {

    return (
        <div className={styles['carousel-block']}>
            {/*<h3 className={styles['text']}>С заботой о самых близких</h3>*/}
            <Button className={styles['button']}>Купить</Button>
            <Carousel controls={true} indicators={true} fade={true} className={styles['carousel']}>
                <Carousel.Item interval={3000} className={styles['carousel-item']}>
                    <div className={styles['image_box']}>
                        <img
                            className="d-block w-50 h-100"
                            src="/src/assets/carousel-image-1-1.png"
                            alt="First slide"
                        />
                        <img
                            className="d-block w-50 h-100"
                            src="/src/assets/carousel-image-1-2.png"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className={styles['carousel-item']}>
                    <div className={styles['image_box']}>
                        <img
                            className="d-block w-100 h-100"
                            src="/src/assets/carousel-image-2.png"
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
                    <div className={styles['image_box']}>
                        <img
                            className="d-block w-50 h-100"
                            src="/src/assets/carousel-image-3-1.png"
                            alt="First slide"
                        />
                        <img
                            className="d-block w-50 h-100"
                            src="/src/assets/carousel-image-3-2.png"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        {/*<h3>С заботой о самых близких</h3>*/}
                        {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                        {/*<Button>Купить</Button>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className={styles['carousel-item']}>
                    <div className={styles['image_box']}>
                        <img
                            className="d-block w-100 h-100"
                            src="/src/assets/carousel-image-4.png"
                            alt="Second slide"
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