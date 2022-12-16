import React from 'react';

import './Button.css';

export type Props = {
    children: React.ReactNode;

};
const Button = (props: Props) => {
    return (
        <button className="button" type='submit' >
            <span style={styles.text}>{props.children}</span>
        </button>
    );
};

const styles = {
    text: {
        color: '#ddd',
    },
};

export default Button;
