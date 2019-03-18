import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    state = {lat: null, errorMeassage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMeassage: error.message})
        );
    }

    render() {
        let {lat, errorMeassage} = this.state;

        return (
            lat || errorMeassage ?
                errorMeassage ?
                    <div>Error: {this.state.errorMeassage}</div>
                    :
                    <div>Latitude: {this.state.lat}</div>
                :
                <div>Loading...</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);