import { createInjector, inject, mergeProps } from "unstateless";
import {ImageComponent} from "./Image.component";
import {IImageInputProps, ImageProps, IImageProps} from "./Image.d";

const injectImageProps = createInjector(({}:IImageInputProps):IImageProps => {
    return {};
});

const connect = inject<IImageInputProps, ImageProps>(mergeProps(
    injectImageProps,
));

export const Image = connect(ImageComponent);
