import {ReviewListProps} from "./ReviewList.props";
import styles from "./ReviewList.module.css";
import {ReviewComp} from "./ReviewComp/ReviewComp";
import {Review} from "../../interfaces/Review"
import cn from "classnames";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {PaginatedItem} from "../../interfaces/PaginatedItem.ts";
import {PREFIX} from "../../helpers/API.ts";
import {useMediaQuery} from "@uidotdev/usehooks";

export function ReviewList(props: ReviewListProps) {

    const [reviews, setReviews] = useState<Review[]>([]);
    const [maxPage, setMaxPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState<Error | null>(null);
    const isMobileDevice = useMediaQuery("(380px <= width < 768px)");
    const isDesktopM = useMediaQuery("(768px <= width < 1280px)");
    const isDesktopL = useMediaQuery("(1280px <= width)");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let limit: number = 0;
        if (isMobileDevice) {
            limit = changePageSize(1)
        } else if (isDesktopM) {
            limit = changePageSize(2)
        } else if (isDesktopL) {
            limit = changePageSize(3)
        }
        getReviewPage(1, limit).then(res => {
            setIsLoading(false);
            if (res != null && res.data.length > 0) {
                setReviews(res.data);
                setMaxPage(res.pages);
                setCurrentPage(res.page);
            }
        })
    }, [isMobileDevice, isDesktopM, isDesktopL]);

    const changePageSize = (pageSize: number) => {
        setPageSize(pageSize);
        return pageSize
    }

    const getReviewPage = async (page: number, limit: number) => {
        setIsLoading(true);
        try {
            const {data} = await axios.get<PaginatedItem<Review>>(`${PREFIX}/reviews`, {
                params: {
                    limit: limit,
                    page: page
                }
            });
            setIsLoading(false);
            if (error != null) setError(null);
            return data;
        } catch (e) {
            setIsLoading(false);
            setError(new Error("Error while getting review"));
            if (e instanceof AxiosError) {
                return null;
            }
            return null;
        }
    }

    return <>
        <div className={cn(styles['reviews-block_controls'])}>
            <h2 className={cn(styles['reviews-text'])}>{props.header}</h2>
            <div className={cn(styles['reviews-arrows'])}>
                <div className={cn(styles['arrow'], {
                    [styles['active']]: currentPage > 1
                })} onClick={() => {
                    if (currentPage > 1) getReviewPage(currentPage - 1, pageSize).then(res => {
                        if (res != null) setReviews(res.data)
                        setCurrentPage(currentPage - 1)
                    })
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.2273 20.3128C15.3176 20.4082 15.3881 20.5205 15.4349 20.6433C15.4817 20.766 15.5039 20.8967 15.5002 21.028C15.4965 21.1593 15.4669 21.2886 15.4133 21.4085C15.3596 21.5284 15.2828 21.6365 15.1873 21.7268C15.0919 21.817 14.9796 21.8875 14.8568 21.9343C14.7341 21.9811 14.6034 22.0033 14.4721 21.9996C14.3408 21.9959 14.2115 21.9663 14.0916 21.9127C13.9717 21.859 13.8636 21.7822 13.7733 21.6868L5.27334 12.6868C5.09781 12.5011 5 12.2553 5 11.9998C5 11.7442 5.09781 11.4984 5.27334 11.3128L13.7733 2.31175C13.863 2.21419 13.9711 2.13541 14.0914 2.07998C14.2117 2.02456 14.3419 1.9936 14.4743 1.98889C14.6067 1.98419 14.7387 2.00584 14.8626 2.05258C14.9866 2.09933 15.1 2.17024 15.1963 2.26119C15.2927 2.35215 15.3699 2.46133 15.4237 2.58241C15.4775 2.70349 15.5067 2.83404 15.5095 2.96649C15.5124 3.09893 15.489 3.23063 15.4405 3.35394C15.3921 3.47724 15.3196 3.58969 15.2273 3.68475L7.37534 11.9998L15.2273 20.3128Z"
                            fill="#584B45" fill-opacity="0.2"/>
                    </svg>
                </div>
                <div className={cn(styles['arrow'], {
                    [styles['active']]: currentPage < maxPage
                })} onClick={() => {
                    if (currentPage < maxPage) getReviewPage(currentPage + 1, pageSize).then(res => {
                        if (res != null) setReviews(res.data)
                        setCurrentPage(currentPage + 1)
                    })
                }
                }>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.77266 3.68725C8.68244 3.59178 8.61191 3.47947 8.56509 3.35674C8.51828 3.23401 8.49609 3.10327 8.49981 2.97196C8.50352 2.84066 8.53306 2.71138 8.58674 2.59149C8.64042 2.47161 8.71719 2.36347 8.81266 2.27325C8.90813 2.18303 9.02044 2.1125 9.14316 2.06569C9.26589 2.01887 9.39664 1.99669 9.52794 2.0004C9.65924 2.00411 9.78853 2.03365 9.90841 2.08733C10.0283 2.14101 10.1364 2.21778 10.2267 2.31325L18.7267 11.3132C18.9022 11.4989 19 11.7447 19 12.0002C19 12.2558 18.9022 12.5016 18.7267 12.6872L10.2267 21.6882C10.137 21.7858 10.0289 21.8646 9.90859 21.92C9.78827 21.9754 9.65813 22.0064 9.52573 22.0111C9.39334 22.0158 9.26133 21.9942 9.13737 21.9474C9.01341 21.9007 8.89998 21.8298 8.80366 21.7388C8.70734 21.6479 8.63005 21.5387 8.57629 21.4176C8.52252 21.2965 8.49335 21.166 8.49046 21.0335C8.48758 20.9011 8.51104 20.7694 8.55948 20.6461C8.60793 20.5228 8.68039 20.4103 8.77266 20.3153L16.6247 12.0002L8.77266 3.68725Z"
                            fill="#584B45" fill-opacity="0.2"/>
                    </svg>
                </div>
            </div>
        </div>
        {isLoading && <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        {!isLoading && <div className={cn(styles['wrapper'], 'placeholder-glow')}>{reviews.map(review => (
                <ReviewComp
                    key={review.id}
                    id={review.id}
                    productName={review.productName}
                    rating={review.rating}
                    imageUrl={review.imageUrl}
                    content={review.content}
                    reviewerName={review.reviewerName}>
                </ReviewComp>
            )
        )}
        </div>}
    </>
}