"use client"
import { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction, useState } from "react";
import styles from "./button.module.css";

type ButtonProps = {
    text: ReactNode;
    fn?: () => void | Dispatch<SetStateAction<boolean>> | Promise<boolean> | Promise<void>;
    p?: boolean;
    buttonModal?: boolean;
    hidden?: boolean;
    backgroundColor?: string;
    textColor?: string;
    border?: string
    props?: ComponentPropsWithoutRef<"button">;
}

const Button = ({ text, fn, p, buttonModal, hidden, backgroundColor, textColor, border, props }: ButtonProps) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false)
    };

    const buttonBackgroundColor = isHovered ? "transparent" : backgroundColor;
    const buttonTextColor = isHovered ? textColor : 'white';

    return (
        <button className={`${styles.button} ${hidden ? styles.hidden : ""} ${buttonModal ? styles.buttonModal : ""} 
        ${p ? styles.p5 : styles.p10} `}
            style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor, border }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={fn}
            {...props}
        >{text}</button>
    )
}

export default Button;