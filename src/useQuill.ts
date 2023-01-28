import { useEffect, useRef, useState } from "react";

import { defaultToolbarOptions } from "./const";

import Quill from "quill";

// import { ImageResizeExtended } from "./CustomImageResize";
// Quill.register("modules/imageResize", ImageResizeExtended);

const defaultConfig = {
    theme: "snow",
    modules: {
        toolbar: defaultToolbarOptions,
        imageResize: {
            modules: [
                "Resize",
                "DisplaySize",
                // 'Toolbar'
            ],
        },
    },
};

type Props = {
    config?: any;
    $target?: HTMLElement | string | null;
    bounds?: HTMLElement;
    theme?: string;
    placeHolder?: string;
    // domRef?: React.RefObject<HTMLDivElement>;
};

export const useQuill = (props: Props = {}) => {
    const domRef = useRef<HTMLDivElement>(null);
    const boundRef = useRef<HTMLDivElement>(null);

    const [quill, setQuill] = useState<Quill>();

    const {
        config = defaultConfig,
        bounds,
        theme = "snow",
        placeHolder,
    } = props;

    useEffect(() => {
        if (!document) return;
        const configToUse = {
            ...config,
            bounds: boundRef.current,
            theme,
            placeHolder,
        };

        const quill: Quill = new Quill(
            domRef.current ?? "#editor",
            configToUse
        );
        setQuill(() => quill);
        const dom = domRef.current;

        return () => {
            quill.disable();

            const previous = dom?.previousElementSibling;
            if (!previous?.classList.contains("ql-toolbar")) return;
            previous.replaceWith("");
        };
    }, [bounds, config, placeHolder, theme]);

    return {
        quill,
        domRef,
        boundRef,
    };
};
