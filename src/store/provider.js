import React, { useState } from "react";
import StoreContext from './context';

const StoreProvider = props => {
    const [inputList, setInputList] = useState([{ date: new Date(), information: "" }]);
    return (
        <StoreContext.Provider
            value={{
                data: inputList,
                handleInputChange: (e, index) => {
                    const { name, value } = e.target;
                    const list = [...inputList];
                    list[index][name] = value;
                    setInputList(list);
                },
                handleTimeChange: (date, index) => {
                    const list = [...inputList];
                    list[index]['date'] = date;
                    setInputList(list);
                },
                handleRemoveClick: index => {
                    const list = [...inputList];
                    list.splice(index, 1);
                    setInputList(list);
                },
                handleAddClick: () => {
                    setInputList([...inputList, { date: new Date(), information: "" }]);
                }
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;