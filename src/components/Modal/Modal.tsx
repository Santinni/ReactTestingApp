import './modal.css';

import {
  FC,
  PropsWithChildren,
} from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open,
  onClose,
  children,
  title,
}) => {
  return (
    <>
      <div
        className={`custom-modal-backdrop fade ${open ? "show" : ""}`}
        style={{ display: open ? "block" : "none" }}
      />
      <div
        className="custom-modal"
        role="dialog"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="custom-modal-dialog" role="document">
          <div className="custom-modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
