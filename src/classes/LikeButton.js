import React, { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false, backgroundColor: '#FFCE33' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ liked: !this.state.liked, backgroundColor: '#68EA07' });
    }
    render() {
        const { liked } = this.state;
        return (
            <button style={{ backgroundColor: this.state.backgroundColor }} onClick={this.handleClick}>
                {liked ? 'Unlike' : 'Like'}
            </button>
        );
    }
}

export default LikeButton;
