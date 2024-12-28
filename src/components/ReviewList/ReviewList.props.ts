import {Review} from "../../interfaces/Review.ts";
import {HTMLAttributes} from "react";

export interface ReviewListProps extends HTMLAttributes<HTMLDivElement> {
    header: string;
    reviews: Review[]
}