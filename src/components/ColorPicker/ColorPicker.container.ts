import { createInjector, inject, mergeProps } from "unstateless";
import {ColorPickerComponent} from "./ColorPicker.component";
import {IColorPickerInputProps, ColorPickerProps, IColorPickerProps} from "./ColorPicker.d";

const injectColorPickerProps = createInjector(({}:IColorPickerInputProps):IColorPickerProps => {
    return {};
});

const connect = inject<IColorPickerInputProps, ColorPickerProps>(mergeProps(
    injectColorPickerProps,
));

export const ColorPicker = connect(ColorPickerComponent);
