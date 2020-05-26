import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class App extends React.Component {
    //other logic
    render() {
        return (
            <div style={{marginLeft: '45%'}}>    <Loader
                type="Puff"
                color="green"
                height={100}
                width={100}

            /></div>
          
        );
    }
}