import PropTypes from 'prop-types';
import classnames from "classnames";
import { Modal } from 'react-bootstrap'
import { Button } from './formComponents/index';

const Mymodal = (props) => {

    const { children, title, handleClose, show, className } = props;

    const classes = classnames(
        'custom_modal',
        className
    )


    return <>
        <Modal className={classes} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button
                    className="btn btn-secondary"
                    onClick={handleClose}
                    text="Close"
                />
            </Modal.Footer>
        </Modal>
    </>
}


Mymodal.propTypes = {
    handleClose: PropTypes.func,
    className: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
    show: PropTypes.bool
}

Mymodal.defaultProps = {
    handleClose: () => { }
};

export default Mymodal;