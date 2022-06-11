import React, { Fragment } from 'react';
// we import the ReactDOM Library, to be able to use the createPortal function that is included
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

// here i am adding in 2 seperate components into this file, as they are very closely tied to the
// modal component
const Backdrop = props => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

// here i made a helper variable to store the portal div that i made in the index.html file
const htmlPortal = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, htmlPortal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, htmlPortal)}
    </Fragment>
  )
}

export default Modal;