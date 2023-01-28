/* eslint-disable */

import * as ImageResizeDefault from "quill-image-resize-module-ts";

const ImageResize = ImageResizeDefault.ImageResize;

export class ImageResizeExtended extends ImageResize {
    constructor(quill: any, options: any) {
        super(quill, options);

        // console.log('ImageResizedExtended:: ', {
        //   quill,
        //   options,
        //   ImageResizeExtended: this,
        //   hide: this.onRootClick,
        //   clickOutside: this.clickOutside,
        // });

        this.clickOutside = this.createClickOutside();
    }
    clickOutside: any;

    createClickOutside() {
        const self = this;
        return function (event: any) {
            if (
                event.target &&
                event.target.tagName &&
                event.target.tagName.toUpperCase() === "IMG"
            ) {
                return;
            }

            // console.log('clickoutside::', {
            //   aaa: self,
            //   event,
            //   tagName: event.target.tagName,
            // });

            self.hideSelection();
            window.removeEventListener("click", self.clickOutside, false);
        };
    }

    private onRootClick() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return function (event: any) {
            if (
                event.target &&
                event.target["tagName"] &&
                event.target["tagName"].toUpperCase() === "IMG"
            ) {
                if (self.currentSelectedImage === event.target) {
                    return; // Focuse is already up and running
                }

                console.log("selected image:: ", {
                    currentSelectedImage: self.currentSelectedImage,
                    event,
                });

                if (self.currentSelectedImage) {
                    self.hideSelection();
                    window.removeEventListener(
                        "click",
                        self.clickOutside,
                        false
                    );
                }

                self.showSelection(event.target);
                window.addEventListener("click", self.clickOutside, false);

                return;
            }

            self.hideSelection();
            window.removeEventListener("click", self.clickOutside, false);
        };
    }
}
