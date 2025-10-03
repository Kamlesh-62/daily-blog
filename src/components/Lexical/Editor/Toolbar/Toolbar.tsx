import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
    $getRoot,
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND,
    FORMAT_ELEMENT_COMMAND,
    UNDO_COMMAND,
    REDO_COMMAND,
} from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faStrikethrough, faUnderline } from '@fortawesome/free-solid-svg-icons'


const Toolbar = () => {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = React.useState(false);
    const [isItalic, setIsItalic] = React.useState(false);
    const [isStrikethrough, setIsStrikethrough] = React.useState(false);
    const [isUnderline, setIsUnderline] = React.useState(false);

    const updateToolbar = React.useCallback(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsStrikethrough(selection.hasFormat('strikethrough'));
            setIsUnderline(selection.hasFormat('underline'));
        }
    }, [editor]);

    React.useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                });
            })
        );
    }, [updateToolbar, editor]);

    return (
        <div className="fixed z-20 shadow bottom-8 left-1/2 transform -translate-x-1/2 min-w-52 h-10 px-2 py-2 mb-4 space-x-2 flex items-center">
            <div onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                }}
            >
                <FontAwesomeIcon icon={faBold} />
                <div>hello</div>
            </div>
        </div>
    );
};

export default Toolbar;
