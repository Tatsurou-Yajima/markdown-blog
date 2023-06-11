import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaRegClone } from "react-icons/fa";

const customCode: CodeComponent = ({ node, inline, className, children, ...props }) => {
    const [isCopied, setIsCopied] = React.useState(false);
    const onCopyClicked = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 4000);
    };
    const match = /language-(\w+)(:?.*)/.exec(className || '');
    const language = match && match[1] ? match[1] : '';
    const fileName = match && match[2] ? match[2].slice(1) : '';
    const syntaxHighlighterClass = fileName
        ? "code-block-with-title"
        : "code-block";
    return !inline && match ? (
        <div>
            <div className="code-block-wrapper">
                {fileName && <div className="code-block-title">{fileName}</div>}
                <span className='code-block-body'>
                    <SyntaxHighlighter
                        style={atomDark}
                        language={language}
                        PreTag="div" {...props}
                        className={syntaxHighlighterClass}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                    <CopyToClipboard text={children}>
                        <button onClick={onCopyClicked} className="copy-button">
                            <span>{isCopied ? "copied!" : <FaRegClone />}</span>
                        </button>
                    </CopyToClipboard>
                </span>
            </div>
            <style jsx>{`
            .code-block-wrapper {
                font-size: 0.9rem;
                margin-bottom: 2rem;
            }
            .code-block-body {
                position: relative;
                height: 100%;
                display: block;
            }
            .code-block-title {
                display: inline-block;
                border-radius: 0.3rem 0.3rem 0 0;
                background-color: #323e52;
                padding: 0.55rem 1rem;
                color: white;
                font-size: 0.8rem;
                font-family: Inconsolata, Monaco, Consolas, "Courier New", Courier,
                    monospace;
                position: relative;
            }
            .copy-button {
                position: absolute;
                right: 0;
                top: 0px;
                border: 0px;
                background: transparent;
                color: #f2f2f2;
                padding: 12px;
                font-size: 1em;
                cursor: pointer;
            }
        `}</style>
            <style jsx global>{`
            .code-block {
                border-radius: 0.3rem !important;
                padding: 1.5rem !important;
            }
            .code-block-with-title {
                border-radius: 0 0.3rem 0.3rem 0.3rem !important;
                padding: 1.5rem !important;
                margin-top: 0 !important;
            }
        `}</style>
        </div>
    ) : (
        <code className={className} {...props} >
            {children}
        </code>
    );
};

const CodeBlock = {
    code: customCode,
}
export default CodeBlock
