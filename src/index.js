import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lat: null, errorMeassage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMeassage: error.message})
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br/>
                Error: {this.state.errorMeassage}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);