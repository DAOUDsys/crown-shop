import './button.style.scss';

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-style ${buttonType}`} {...otherProps}>{children}</button>
    );
};

export default Button;