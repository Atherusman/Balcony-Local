import './Calendar.scss';

import { FC, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

import 'react-calendar/dist/Calendar.css';
interface IProps {
    value: Date | null;
    onChange: (val: Date) => void;
}
export const BaseCalendar: FC<IProps> = ({ value, onChange }) => {
    return (
        <Calendar
            formatShortWeekday={(locale, date) => moment(date).format('dd')}
            onChange={(val: Date) => onChange(val)}
            value={value}
            defaultValue={new Date()}
            className="base-calendar"
        />
    );
};
