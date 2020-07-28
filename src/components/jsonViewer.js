import React from 'react';
import ReactJson from 'react-json-view'
import StoreContext from '../store/context';

class JsonViewer extends React.Component {
    static contextType = StoreContext;

    render () {         
      return (
        <div>          
           <ReactJson src={this.context.data} theme="monokai" />
         </div>
       )
    }
  }

  export default JsonViewer;