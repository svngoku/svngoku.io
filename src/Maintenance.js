const e = React.createElement;
class MaintenanceMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Désolé! Le site est actuellement en pleine maintenance.'
        };
    }

    render() {
        return `
            <div className="container">
                <h1><code>🚧🏗<span></span></code></h1>
                <h4>{ this.state.message }</h4>
                    <embed className="App-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width="210" >
                    <embed className="hvr-buzz-out" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" width="130" >
                <h4>💻</h4>
            </div> `
        
    }
}


ReactDOM.render(<MaintenanceMode />, document.getElementById('root'))


