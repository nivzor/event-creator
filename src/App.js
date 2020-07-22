import React, { Fragment } from 'react';
import StoreProvider from './store/provider';
import StoreContext from './store/context';
import TimePicker from './components/timePicker';
import JsonViewer from './components/jsonViewer';
import HtmlViewer from './components/htmlViewer';
import './App.scss';


const EventsInputComp = () => {
    return (
        <StoreContext.Consumer>
            {context => (
                <Fragment>
                    {context.data.events.map((x, i) => {
                        return (
                            <div className="box" key={i}>
                                <TimePicker index={i} />
                                <input
                                    className="ml10"
                                    name="information"
                                    placeholder="Enter Event Information"
                                    value={x.information}
                                    onChange={e => context.handleInputChange(e, i, 'events')}
                                />
                                <div className="btn-box">
                                    {context.data.events.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => context.handleRemoveClick(i, 'events')}>Remove</button>}
                                    {context.data.events.length - 1 === i && <button onClick={() => context.handleAddClick('events')}>Add</button>}
                                </div>
                            </div>
                        );
                    })}
                </Fragment>
            )}
        </StoreContext.Consumer>
    );
}

const DefaultsInputComp = () => {
    return (
        <StoreContext.Consumer>
            {context => (
                <Fragment>
                    {context.data.defaults.map((x, i) => {
                        return (
                            <div className="box" key={i}>
                                <input
                                    className="defaults-ml10"
                                    name="def_information"
                                    placeholder="Enter default Information"
                                    value={x.def_information}
                                    onChange={e => context.handleInputChange(e, i, 'defaults')}
                                />
                                <div className="btn-box">
                                    {context.data.defaults.length !== 1 && <button
                                        className="defaults-mr10"
                                        onClick={() => context.handleRemoveClick(i, 'defaults')}>Remove</button>}
                                    {context.data.defaults.length - 1 === i && <button onClick={() => context.handleAddClick('defaults')}>Add</button>}
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
                <div>
                    <JsonViewer />                    
                </div>
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
                    <h3 className="form-side--title">Events: </h3>
                    <EventsInputComp />
                    <h3 className="form-side--title">Defaults: </h3>
                    <DefaultsInputComp />
                </div>
                <div className="output-side">                                        
                    <HtmlViewer />
                    <hr />
                    <br/><br/>
                    <OutputComp />
                </div>
            </div>
        </StoreProvider>
    );
}

export default App;