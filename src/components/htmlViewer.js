import React from 'react';
import StoreContext from '../store/context';
import Prism from "prismjs";
import '../style/prism.css';

class HtmlViewer extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    componentDidUpdate() {
        Prism.highlightAll();
    }
    static contextType = StoreContext;

    render() {
        return (
            <pre>
                <code className="language-html">
{
`
<script>
var feedPhaseData = 
${JSON.stringify(this.context.data, null, 4)}
</script>
`}
                </code>
            </pre>
        )
    }
}

export default HtmlViewer;