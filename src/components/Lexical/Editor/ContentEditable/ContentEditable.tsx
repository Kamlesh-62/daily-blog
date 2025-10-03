
import { JSX } from 'react';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import './ContentEditable.css';

type Props = {
    placeholder: string;
};

export default function LexicalContentEditable({
    placeholder,
}: Props): JSX.Element {
    return (
        <div className="ContentEditable-container">
            <ContentEditable
                className="ContentEditable-root"
                aria-placeholder={placeholder}
                placeholder={
                    <div className="ContentEditable-placeholder">
                        {placeholder}
                    </div>
                }
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
        </div>
    );
}