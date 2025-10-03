
import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { InitialConfigType } from '@lexical/react/LexicalComposer';
import ExampleTheme from './Theme/ExampleTheme';
import Editor from './Editor/Editor';

const editorConfig: InitialConfigType = {
    namespace: 'DailyBlogRichTextEditor',
    onError(error: Error) {
        throw error;
    },
    theme: ExampleTheme,
    nodes: [],

};

const DailyBlogRichTextEditor = () => {
    return (
        <div className='p-4'>
            <LexicalComposer initialConfig={editorConfig}>
                <Editor />
            </LexicalComposer>
        </div>
    );
};

export default DailyBlogRichTextEditor;
