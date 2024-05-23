"use client"
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
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
}

const Button = ({ text, fn, p, buttonModal, hidden, backgroundColor, textColor, border }: ButtonProps) => {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false)
    };

    const buttonBackgroundColor = isHovered ? "transparent" : backgroundColor; 
    const buttonTextColor = isHovered ? textColor: 'var(--text)' ;

    return (
        <button className={`${styles.button} ${hidden ? styles.hidden : ""} ${buttonModal ? styles.buttonModal : ""} 
        ${p ? styles.p5 : styles.p10 } `}
        style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor, border }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={fn}>{text}</button>
    )
}

export default Button;