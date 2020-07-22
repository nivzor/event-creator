import React from 'react';
import DatePicker from 'react-datepicker';
import StoreContext from '../store/context';

import 'react-datepicker/dist/react-datepicker.css';

const TimePicker = ({ index }) => {
    return (
        <StoreContext.Consumer>
            {context => (
                <DatePicker
                    selected={context.data.events[index].date}
                    onChange={date => context.handleTimeChange(date, index)}
                    timeInputLabel="Time:"
                    locale="en-UK"                    
                    dateFormat="dd/MM/yyyy HH:mm"
                    showTimeInput
                />
            )}

        </StoreContext.Consumer>
    );
};

export default TimePicker