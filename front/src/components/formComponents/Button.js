import PropTypes from 'prop-types';
import classnames from "classnames";

const Button = ({ size, className, text, children, ...rest }) => {

    const classes = classnames(
        'form_button btn',
        `${size}`,
        className
    )
    return <button className={classes} {...rest} >{text}{children}</button>

}

Button.propTypes = {
    size: PropTypes.oneOfType(['small', 'default', 'large']),
    className: PropTypes.string,
    text: PropTypes.string
}

Button.defaultProps = {
    size: 'default'
};

export default Button;