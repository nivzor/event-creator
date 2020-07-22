import React, { Fragment } from 'react';
import StoreProvider from './store/provider';
import StoreContext from './store/context';
import TimePicker from './components/timePicker';
import JsonViewer from './components/jsonViewer';
import './App.scss';


const InputComp = () => {
    return (
        <StoreContext.Consumer>
            {context => (
                <Fragment>
                    {context.data.events.map((x, i) => {
                        return (
                            <div className="box">
                                <TimePicker index={i} />
                                <input
                                    className="ml10"
                                    name="information"
                                    placeholder="Enter Event Information"
                                    value={x.information}
                                    onChange={e => context.handleInputChange(e, i)}
                                />
                                <div className="btn-box">
                                    {context.data.events.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => context.handleRemoveClick(i)}>Remove</button>}
                                    {context.data.events.length - 1 === i && <button onClick={context.handleAddClick}>Add</button>}
                                </div>
                            </div>
                        );
                    })}
                </Fragment>
            )}
        </StoreContext.Consumer>
    );
}

const OutputComp = () => {
    return (
        <StoreContext.Consumer>
            {context => (
                <JsonViewer />
            )}
        </StoreContext.Consumer>
    );
}

const App = () => {
    return (
        <StoreProvider>
            <div className="main-container">
            <h1 className="title">Events Creator for Live Feed (phase 2)</h1>
                <div className="form-side">
                    <h3 className="form-side--title">Event Creator Form</h3>
                    <InputComp />
                </div>
                <div className="output-side">
                    <OutputComp />
                </div>
            </div>
        </StoreProvider>
    );
}

export default App;