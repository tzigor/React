import './Button.css';
import { FC } from 'react';

interface ButtonProp {
    click?: () => void;
}

export const Button: FC<ButtonProp> = ({ click }) => {
    return (
        <button className="buttonSend" onClick={click}>
            Send message
        </button>
    );
}