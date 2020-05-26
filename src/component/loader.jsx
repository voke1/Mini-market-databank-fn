import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
    render() {
        return (
            <div style={{marginLeft: '50%'}}>
                <Spinner radius={20} color={"white"} stroke={2} visible={true} />
            </div>
        );
    }
}