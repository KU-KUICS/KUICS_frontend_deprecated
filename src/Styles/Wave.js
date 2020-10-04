import React from 'react';

const Wave = props => {
    return (
        <div class="waves" style={{ position: 'relative', top: '-1px' }}>
            <svg width="100%" viewBox="0 0 2000 120">
                <path
                    fill={props.color}
                    d="
                M 0 0
                V 20
                Q 1000 120 2000 20
                V -20
                Z
                "
                ></path>
            </svg>
        </div>
    );
};

export default Wave;
