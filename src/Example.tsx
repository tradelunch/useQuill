import React, { useRef } from "react";
import { QuillToolbar } from "./QuillToolbar";
import { useQuill } from "./useQuill";

type Props = {};

export function Example({}: Props) {
    const toolBarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const boundsRef = useRef<HTMLDivElement>(null);

    const { quillRef } = useQuill({
        containerRef,
        boundsRef,
        toolBarRef,
    });

    return (
        <>
            <QuillToolbar ref={toolBarRef} />
            <div ref={boundsRef}>
                <div className=".editor" ref={containerRef} />
            </div>
        </>
    );
}
