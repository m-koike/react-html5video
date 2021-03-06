/*eslint-disable */
/*
 * Generated by the 'fontello-react' Grunt task.
 */
import React from 'react';

var Icon = React.createClass({

    propTypes: {
        name: React.PropTypes.oneOf([
            'play-1',
			'volume-off',
			'volume-down',
			'volume-up',
			'resize-full',
			'resize-small',
			'pause-1'
        ])
    },

    /**
     * Default the icon to the first one just to show something
     * @return {Object} The default props
     */
    getDefaultProps() {
        return {
            name: 'play-1'
        };
    },

    render() {
        return (
            <span className={'video-icon video-icon--' + this.props.name}></span>
        );
    }

});

export default Icon;
