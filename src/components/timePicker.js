import React from 'react';
import StoreContext from '../store/context';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TimePicker = () => {    
    return (
        <StoreContext.Consumer>
            {context => (
                <DatePicker
                    selected={context.data.date}
                    onChange={date => context.handleInputChange(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
            )}
        </StoreContext.Consumer>
    );
};

export default TimePicker