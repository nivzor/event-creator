import React, { useState } from "react";
import StoreContext from './context';

const StoreProvider = props => {
    const [inputList, setInputList] = useState(
        {
            type: 'feedPhaseData',
            title: 'Events',
            events: [{ date: timeExtractor(new Date()), information: "" }],            
        }
    );

    function compensateDST(dt) {
        var janOffset = new Date(dt.getFullYear(), 0, 1).getTimezoneOffset();
        var julOffset = new Date(dt.getFullYear(), 6, 1).getTimezoneOffset();
        var dstMinutes = dt.getTimezoneOffset() - Math.max(janOffset, julOffset);
        dt = new Date(dt);
        dt.setMinutes(dt.getMinutes() - dstMinutes);
        return dt;
    }
    function timeExtractor(date) {
        var extractTime = date;
        // Truncate to minute precision:
        // var extractTimeLocal = new Date(extractTime.getTime() - extractTime.getTime() % 60000);
        //console.log('Local time:', extractTime.toString());
        //console.log('UTC time before correction:', extractTime.toISOString());
        // Compensate for the DST shift:
        var extractTimeUTCDST = compensateDST(extractTime);
        //console.log('UTC time  after correction:', extractTime.toISOString());
        return {
            date: extractTime,
            dateLocal: extractTime.toString(),
            dateUk: extractTimeUTCDST,
            dateParsed: Date.parse(extractTime),
        };
    }
    return (
        <StoreContext.Provider
            value={{                
                data: inputList,
                handleInputChange: (e, index, type) => {
                    const { name, value } = e.target;
                    const list = (type === 'events') 
                    ? { type: 'feedPhaseData', title: 'Events', events: [...inputList.events] }
                    : { type: 'feedPhaseDataMatches', title: 'Matches', events: [...inputList.events] };
                    list.events[index][name] = value;
                    setInputList(list);
                },
                handleTimeChange: (date, index, type) => {
                    const list = (type === 'events') 
                    ? { type: 'feedPhaseData', title: 'Events', events: [...inputList.events] }
                    : { type: 'feedPhaseDataMatches', title: 'Matches', events: [...inputList.events] };                    
                    list.events[index]['date'] = timeExtractor(date);
                    setInputList(list);
                },
                handleRemoveClick: (index, type) => {                    
                    const list = (type === 'events') 
                    ? { type: 'feedPhaseData', title: 'Events', events: [...inputList.events] }
                    : { type: 'feedPhaseDataMatches', title: 'Matches', events: [...inputList.events] };
                    list.events.splice(index, 1);
                    setInputList(list);
                },
                handleAddClick: (type) => {
                    const list = (type === 'events') 
                    ? { type: 'feedPhaseData', title: 'Events', events: [...inputList.events, { date: timeExtractor(new Date()), information: "" }] } 
                    : { type: 'feedPhaseDataMatches', title: 'Matches', events: [...inputList.events, { date: timeExtractor(new Date()), club1: "", club2: "" }] };                    
                    setInputList(list);
                },
                handleTypeChange: (type) => {
                    const list = (type === 'events') 
                    ? {type: 'feedPhaseData', title: 'Events', events: [{ date: timeExtractor(new Date()), information: "" }]} 
                    : {type: 'feedPhaseDataMatches', title: 'Matches', events: [{ date: timeExtractor(new Date()), club1: "", club2: "" }]};
                    setInputList(list);
                }
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;