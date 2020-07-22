import React, { useState } from "react";
import StoreContext from './context';

const StoreProvider = props => {
    const [inputList, setInputList] = useState(
        {
            events: [{ date: new Date(), information: "" }],
            defaults: [{ def_information: "" }]
        }
    );
    return (
        <StoreContext.Provider
            value={{
                data: inputList,
                handleInputChange: (e, index) => {
                    const { name, value } = e.target;
                    const list = { events: [...inputList.events], defaults: [...inputList.defaults] };
                    list['events'][index][name] = value;
                    setInputList(list);
                },
                handleTimeChange: (date, index) => {
                    const list = { events: [...inputList.events], defaults: [...inputList.defaults] };
                    list['events'][index]['date'] = date;                    
                    setInputList(list);
                },
                handleRemoveClick: index => {
                    const list = { events: [...inputList.events], defaults: [...inputList.defaults] };
                    list['events'].splice(index, 1);                    
                    setInputList(list);
                },
                handleAddClick: () => {
                    const list = { events: [...inputList.events, { date: new Date(), information: "" }], defaults: [...inputList.defaults] };                    
                    setInputList(list);
                }
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;