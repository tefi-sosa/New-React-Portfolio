import { createPortal } from 'react-dom';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return (
    <div className='modal-test'>
      <div className='content'>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal