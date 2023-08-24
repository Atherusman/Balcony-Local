import './DocFile.scss';
import { FC } from 'react';

import { ReactComponent as IconFile } from 'src/assets/images/iconFile.svg';
import { IconDownload } from 'src/icons';
import { tDoc } from 'src/types';

interface IProps extends tDoc {
    onSave: () => void;
}
export const DocFile: FC<IProps> = ({ name, size, path, mime, onSave }) => {
    return (
        <div className="doc" onClick={() => onSave()}>
            <div className="doc__left">
                <span className="doc__left_file">
                    <IconFile />
                    <p className="doc__left_file_name">{mime}</p>
                </span>
                <div className="doc__left_text">
                    <h3>{name}</h3>
                    <h5>{size}</h5>
                </div>
            </div>
            <div>
                <IconDownload />
            </div>
        </div>
    );
};
