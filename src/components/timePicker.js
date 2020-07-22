import React from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import gb from "date-fns/locale/en-GB"; 
import StoreContext from '../store/context';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale("en-GB", gb); 

const TimePicker = ({ index }) => {
    return (
        <StoreContext.Consumer>
            {context => (
                <DatePicker
                    selected={context.data.events[index]['date'].date}
                    onChange={date => context.handleTimeChange(date, index)}
                    timeInputLabel="Time:"
                    locale="en-GB"                 
                    dateFormat="dd/MM/yyyy HH:mm"
                    showTimeInput
                />
            )}

        </StoreContext.Consumer>
    );
};

export default TimePicker