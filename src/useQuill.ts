import React, { useEffect, useRef } from "react";
import Quill, { QuillOptionsStatic } from "quill";

import { defaultToolbarOptions } from "./const";

import { ImageResizeExtended } from "./CustomImageResize";
Quill.register("modules/imageResize", ImageResizeExtended);

const defaultOptions: QuillOptionsStatic = {
    modules: {
        toolbar: defaultToolbarOptions,
        imageResize: {
            modules: [
                "Resize",
                "DisplaySize",
                // "Toolbar"
            ],
        },
    },
    theme: "snow",
    // formats: [
    //     "header",
    //     "font",
    //     "size",
    //     "bold",
    //     "italic",
    //     "underline",
    //     "align",
    //     "strike",
    //     "script",
    //     "blockquote",
    //     "background",
    //     "list",
    //     "bullet",
    //     "indent",
    //     "link",
    //     "image",
    //     "color",
    //     "code-block",
    // ],
};

export type Modules = {
    [key: string]: any;
};

type Props = {
    onTextChange?: any;
    onImageAdded?: any;

    containerRef?: React.RefObject<any>;
    boundsRef?: React.RefObject<any>;
    toolBarRef?: React.RefObject<any>;
    options?: QuillOptionsStatic;
};

export const useQuill = (props: Props = {}) => {
    const quillRef = useRef<Quill>();
    // const containerRef = useRef<HTMLDivElement>(null);

    const {
        options = defaultOptions,
        containerRef,
        boundsRef,
        toolBarRef,
    } = props;

    useEffect(() => {
        if (!document) return;
        // if (containerRef === null) return;
        // if (quillRef.current !== undefined) return;

        const optionsToUse = {
            ...options,
            bounds: boundsRef?.current,
            modules: {
                ...options.modules,
                // toolbar: "#toolbar",
                // toolbar: {
                //     container: "#toolbar",
                // },
                ...(toolBarRef?.current !== undefined && {
                    toolbar: toolBarRef.current,
                }),
            },
        };

        // if (toolBarRef?.current) {
        //     toolBarRef.current.query
        // }

        const quillCreated: Quill = new Quill(
            containerRef?.current ?? ".editor",
            optionsToUse
        );
        quillRef.current = quillCreated;
        console.log("optionsToUse:: ", {
            optionsToUse,
            container: containerRef?.current,
            quill: quillRef,
        });

        return () => {
            quillRef?.current?.disable();
            // const previous = containerRef?.current.previousElementSibling;
            // if (!previous?.classList.contains("ql-toolbar")) return;
            // previous.replaceWith("");
        };
    }, [options]);

    return {
        quillRef,
        // containerRef,
    };
};
