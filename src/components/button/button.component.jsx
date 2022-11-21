import { BaseButton,GoogleButton,ClassicButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'g',
    inverted: 'inverted',
};
  
const getButton = (type = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: ClassicButton,
    }[type])

const Button = ({children, buttonType, ...otherProps}) => {

    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;