import './CalendarModal.scss';
import { useEffect, useState } from 'react';
import { BaseCalendar, InfoLine } from 'src/components';
import Moment from 'react-moment';
type tData = {
    interest_due: string;
    principal_due: string;
    total_due: string;
};
export const CalendarModal = () => {
    const [day, setDay] = useState<Date | null>(null);
    const [data, setData] = useState<tData>({
        interest_due: '-',
        principal_due: '-',
        total_due: '-',
    });

    useEffect(() => {
        if (day != new Date()) {
            setData({ interest_due: '$100.00', principal_due: '$0.00', total_due: '$0.00' });
        }
    }, [day]);
    return (
        <div className="calendar-modal">
            <div className="calendar-modal__block">
                <h2>Project Interest</h2>
                {day ? (
                    <h5>
                        for <Moment format="D MMMM YYYY">{day}</Moment>
                    </h5>
                ) : (
                    <h5>Please choose a date to see the Project Interest below.</h5>
                )}
            </div>
            <div className="calendar-modal__block bg-white">
                <InfoLine title="Interest Due" text={data.interest_due} />
                <InfoLine title="Principal Due" text={data.principal_due} />
                <InfoLine title="Total Due" text={data.total_due} />
            </div>
            <div className="calendar-modal__block">
                <BaseCalendar value={day} onChange={(val: Date) => setDay(val)} />
            </div>
        </div>
    );
};
