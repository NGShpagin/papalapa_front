import {InputHTMLAttributes} from "react";

export interface CheckboxCircleProps extends InputHTMLAttributes<HTMLDivElement> {
    element: () => HTMLElement | null;
}