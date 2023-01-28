import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react";

type Props = {};

export const QuillToolbar = forwardRef(function (
    {}: Props,
    toolBarRef: ForwardedRef<HTMLDivElement>
) {
    return (
        <div id="toolbar" ref={toolBarRef}>
            <span className="ql-formats">
                {/* <select className="ql-font" defaultValue="arial">
                    <option value="arial">Arial</option>
                    <option value="comic-sans">Comic Sans</option>
                    <option value="courier-new">Courier New</option>
                    <option value="georgia">Georgia</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="lucida">Lucida</option>
                </select> */}
                <select className="ql-size" defaultValue="normal">
                    <option value="small">Small</option>
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                    <option value="huge">Huge</option>
                </select>
                {/* <select className="ql-header" defaultValue="3">
                    <option value="1">h1</option>
                    <option value="2">h2</option>
                    <option value="3">h3</option>
                    <option value="4">h4</option>
                    <option value="5">h5</option>
                    <option value="6">h6</option>
                </select> */}
            </span>
            <span className="ql-formats">
                <button
                    className="ql-bold"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Bold"
                />
                <button
                    className="ql-italic"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add italic text <cmd+i>"
                />
                <button className="ql-underline" />
                <button className="ql-strike" />
            </span>
            <span className="ql-formats">
                <button className="ql-list" value="ordered" />
                <button className="ql-list" value="bullet" />
                <button className="ql-indent" value="-1" />
                <button className="ql-indent" value="+1" />
            </span>
            {/* <span className="ql-formats">
                <button className="ql-script" value="super" />
                <button className="ql-script" value="sub" />
                <button className="ql-blockquote" />
                // {/* <button className="ql-formula" />
                <button className="ql-code-block" />
            </span> */}
            <span className="ql-formats">
                <select className="ql-align" />
                <select className="ql-color" />
                <select className="ql-background" />
            </span>
            <span className="ql-formats">
                <button className="ql-link" />
                <button className="ql-image" />
                <button className="ql-video" />
            </span>
            <span className="ql-formats">
                <button className="ql-clean" />
                <button
                    type="button"
                    className="ql-direction"
                    value="rtl"
                ></button>
            </span>
            {/* <span className="ql-formats">
                <button className="ql-undo">
                    <CustomUndo />
                </button>
                <button className="ql-redo">
                    <CustomRedo />
                </button>
            </span> */}
        </div>
    );
});
