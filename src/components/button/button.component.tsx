import { BaseButton,GoogleButton,ClassicButton } from "./button.style";
import { FC, ButtonHTMLAttributes } from "react";

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'g',
    inverted = 'inverted',
};
  
const getButton = (type = BUTTON_TYPE_CLASSES.base): typeof BaseButton => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: ClassicButton,
    }[type]);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType?: BUTTON_TYPE_CLASSES;
}

const Button:FC<ButtonProps> = ({children, buttonType, ...otherProps}) => {

    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;