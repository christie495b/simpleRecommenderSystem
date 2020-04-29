import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

export default class Header extends Component {
    render() {
        return (
            <div className="ui secondry pointing menu">
                <Link to="/" className="item" >Streamer</Link>
                <div className="right menu">
                    <Link to="/" className="item" >All Streams</Link>
                    <GoogleAuth ></GoogleAuth>
                </div>
            </div>
        )
    }
}
