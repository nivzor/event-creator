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
                                <TimePicker index={i} type="events"/>
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

const MatchesInputComp = () => {
    return (
        <StoreContext.Consumer>
            {context => (
                <Fragment>
                    {context.data.events.map((x, i) => {
                        return (
                            <div className="box" key={i}>
                                <TimePicker index={i} type="matches"/>
                                <input
                                    className="matches-ml10"
                                    name="club1"
                                    placeholder="Enter home Name"
                                    value={x.club1}
                                    onChange={e => context.handleInputChange(e, i, 'matches')}
                                />
                                <label> VS </label>
                                <input
                                    className="matches-ml10"
                                    name="club2"
                                    placeholder="Enter away name"
                                    value={x.club2}
                                    onChange={e => context.handleInputChange(e, i, 'matches')}
                                />
                                <div className="btn-box">
                                    {context.data.events.length !== 1 && <button
                                        className="matches-mr10"
                                        onClick={() => context.handleRemoveClick(i, 'matches')}>Remove</button>}
                                    {context.data.events.length - 1 === i && <button onClick={() => context.handleAddClick('matches')}>Add</button>}
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
const TypeSelector = () => {
    return (
        <StoreContext.Consumer>
            {context => (                
                <div className="title">
                    <div>Events Creator </div>
                    <span onClick={()=> context.handleTypeChange('events')}>Live Feed 2 </span>
                    &nbsp;|&nbsp;
                    <span onClick={()=> context.handleTypeChange('matches')}>Matches Top 3 Feed</span>
                </div>
            )}
        </StoreContext.Consumer>
    );   
}
const FormByType = () => {
    return (
          <StoreContext.Consumer>
            {context => (                
                <Fragment>
                    <h3 className="form-side--title">{context.data.title}:</h3>
                    {context.data.type === 'feedPhaseData' && <EventsInputComp />}
                    {context.data.type === 'feedPhaseDataMatches' && <MatchesInputComp />}
                </Fragment>
            )}
        </StoreContext.Consumer>
    )
}
const App = () => {
    return (
        <StoreProvider>
            <div className="main-container">
                <TypeSelector />
                <div className="form-side">
                    <FormByType />                    
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