import { FC } from 'react';
import { Modal } from 'src/components';
import './CommingSoon.scss';
interface IProps {
    isShow: boolean;
    onClose: () => void;
}

export const CommingSoon: FC<IProps> = ({ isShow, onClose }) => {
    return (
        <Modal width={450} show={isShow} onClose={() => onClose()}>
            <div className="comming_soon">
                <p className="comming_soon__text">This feature is under construction.</p>
                <p className="comming_soon__text">Please check back soon</p>
            </div>
        </Modal>
    );
};
