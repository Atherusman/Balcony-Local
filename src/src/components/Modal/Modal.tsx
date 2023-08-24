import { FC, useRef, useEffect, MouseEvent } from 'react';
import { WHITE } from 'src/constants';
import { IconClose } from 'src/icons';
import './Modal.scss';

interface IProps {
    children: JSX.Element;
    show: boolean;
    onClose: (args?: boolean | MouseEvent<any>) => any | void;
    width?: string | number;
    className?: string;
}

export const Modal: FC<IProps> = ({ children, show, onClose, width, className }) => {
    const modalRef = useRef<HTMLElement | any>(null);
    const nodeRef = useRef<HTMLElement | any>();

    useEffect(() => {
        if (show) {
            modalRef.current.classList.add('modal--visible');
        } else {
            modalRef.current.classList.remove('modal--visible');
        }
    }, [show]);

    return (
        <div ref={modalRef} className="modal">
            <div
                className="modal__bg"
                onClick={() => {
                    onClose();
                }}
            />
            <div
                ref={nodeRef}
                className={`modal__content ${className}`}
                style={{ maxWidth: width }}
            >
                <button
                    className="modal__content_close"
                    onClick={() => {
                        onClose();
                    }}
                >
                    <IconClose color={WHITE} />
                </button>
                {children}
            </div>
        </div>
    );
};
