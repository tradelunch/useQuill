declare module "quill-image-resize-module-ts" {
    class ImageResize {
        constructor(quill: any, options: any);
        public hideSelection();
        public currentSelectedImage: any;
        public showSelection(target: any);
    }
}
