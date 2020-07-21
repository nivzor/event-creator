import React, { useState } from "react";
import StoreContext from './context';

const StoreProvider = props => {
    const [inputList, setInputList] = useState([{ date: new Date(), lastName: "" }]);
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
                handleRemoveClick: index => {
                    const list = [...inputList];
                    list.splice(index, 1);
                    setInputList(list);
                },
                handleAddClick: () => {
                    setInputList([...inputList, { firstName: "", lastName: "" }]);
                }
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;