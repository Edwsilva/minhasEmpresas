"use client"
import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./button.module.css";

type ButtonProps = {
    text: ReactNode;
    fn?: () => void | Dispatch<SetStateAction<boolean>> | Promise<boolean> | Promise<void>;
    p?: "p-10";
    buttonModal?: boolean;
    hidden?: boolean;
}

const Button = ({ text, fn, p, buttonModal, hidden }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${hidden ? styles.hidden : ""} ${buttonModal ? styles.buttonModal : ""} ${p ? styles.p10 : ""}`} onClick={fn}>{text}</button>
    )
}

export default Button;