import type { JSX } from 'react';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import LexicalContentEditable from './ContentEditable/ContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import Toolbar  from './Toolbar/Toolbar';

export default function Editor(): JSX.Element {

    return (
        <div >
            <Toolbar />
            <RichTextPlugin
                contentEditable={
                    <LexicalContentEditable placeholder="Enter some text..." />     
                }
                ErrorBoundary={LexicalErrorBoundary}
            />
        </div>
    )
}
