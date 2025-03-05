import {CheckboxCircleProps} from "./CheckboxCircle.props";
import cn from "classnames";
import styles from "./CheckboxCircle.module.css";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";

export const CheckboxCircle = forwardRef<HTMLDivElement, CheckboxCircleProps>(function CheckboxCircle({
                                                                                                          className,
                                                                                                          ...props
                                                                                                      }, ref) {
    const [active, setActive] = useState<boolean>(false);
    const [isEventListener, setIsEventListener] = useState<boolean>(false);
    const myRef = useRef<HTMLDivElement>(null);
    const circleElRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => circleElRef.current as HTMLDivElement);

    const activate = () => {
        setActive(true);
        if (!isEventListener) {
            document.addEventListener("click", click);
            setIsEventListener(true);
        }
    }

    const click = (e: MouseEvent) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (!props.element()?.contains(e.target) && e.target != circleElRef.current) {
            setActive(false);
            document.removeEventListener("click", click);
            setIsEventListener(false)
        }
    }

    return (
        <div type={"checkbox"} {...props} ref={myRef} className={cn(styles['button'],
            {[styles['isActive']]: active}, className)}>
            <div ref={circleElRef} className={styles['button-circle']} onClick={activate}/>
        </div>
    );
})