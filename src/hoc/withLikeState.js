import React, { Component } from 'react';
import LikeButton from '../classes/LikeButton';

const withLikeState = (WrappedComponent) => {
    class WithLikeState extends Component {
        constructor(props) {
            super(props);
            this.state = { liked: false };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            this.setState({ liked: !this.state.liked });
        }

        render() {
            const { liked } = this.state;
            return <WrappedComponent liked={liked} onClick={this.handleClick} />;
        }
    }
    WithLikeState.displayName = `WithLikeState(${getDisplayName(WrappedComponent)})`;

    return WithLikeState;
};

const LikeButtonWithHOC = withLikeState(LikeButton);
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export { withLikeState, LikeButtonWithHOC };
