import PropTypes from 'prop-types';
import classnames from "classnames";

const Input = (props) => {

    const { size, className, validateName, form, field = {}, name, disabled, ...rest } = props;

    let { touched, errors } = form ? form : { touched: {}, errors: {} };
    const classes = classnames(
        'form_input form-control',
        `${size}`,
        className,
        touched[field.name] && errors[field.name] && 'is-invalid',
        touched[validateName] && errors[validateName] && 'is-invalid',
        size && `${size}`,
        disabled && 'disabled',
        !errors[field.name] && field.value && 'active',

    )
    return <>
        <div className={`${field.name ? 'custom_input_wrapper' : ''}`}>
            <input type="text" className={classes} {...rest} name={name} />
            <div className="error_block">
                {touched[field.name] && errors[field.name] && (
                    <div className="mod-main-input__error ">{errors[field.name]}</div>
                )}
                {touched[validateName] && errors[validateName] && (
                    <div className="mod-main-input__error ">{errors[validateName]}</div>
                )}
            </div>

        </div>
    </>
}

Input.propTypes = {
    size: PropTypes.oneOfType(['small', 'default', 'large']),
    className: PropTypes.string,
}

Input.defaultProps = {
    size: 'default'
};

export default Input;