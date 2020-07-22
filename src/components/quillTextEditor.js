import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';
import StoreContext from '../store/context';
import 'react-quill/dist/quill.snow.css';


class TextEditor extends React.Component {
    static contextType = StoreContext;
    constructor (props) {
      super(props)
      this.state = { editorHtml: this.context, theme: 'default', readOnly: true }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (json) {
        this.setState({ editorHtml: json });
    }    
    
    render () {         
      return (
        <div>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={JSON.stringify(this.context.data,undefined,1)}            
           />
         </div>
       )
    }
  }

  export default TextEditor;