import './ViewSwitcher.scss';

import { FC, createElement } from 'react';
import { MainButton } from 'src/components';
import { IconGrid, IconGridColumn, IconList } from 'src/icons';

import { tView } from 'src/types';
import { VIOLET, GREY400 } from 'src/constants';

interface IProps {
    view: tView;
    onChangeView: (view: tView) => void;
}

export const ViewSwitcher: FC<IProps> = ({ view, onChangeView }) => {
    const Components = {
        grid: IconGrid,
        gridColumn: IconGridColumn,
        list: IconList,
    };
    const icons: tView[] = ['grid', 'gridColumn', 'list'];
    return (
        <div className="switcher-line">
            {icons.map(el => {
                return (
                    <MainButton
                        key={el}
                        buttonType="icon"
                        buttonColor="white"
                        buttonSize="s"
                        onClick={() => onChangeView(el)}
                    >
                        {createElement(Components[el], {
                            color: el === view ? VIOLET : GREY400,
                        })}
                    </MainButton>
                );
            })}
        </div>
    );
};
