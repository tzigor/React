import { Component } from 'react';
import React from 'react';

export class Count extends Component {
    state = {
        count: 1
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return <>
            <p>count props: {this.props.count}</p>
            <p>count state: {this.state.count}</p>
            <button type='button' onClick={this.handleClick}>click</button>
        </>
    }
}