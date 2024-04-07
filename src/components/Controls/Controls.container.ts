import { createInjector, inject, mergeProps } from "unstateless";
import {ControlsComponent} from "./Controls.component";
import {IControlsInputProps, ControlsProps, IControlsProps} from "./Controls.d";

const injectControlsProps = createInjector(({}:IControlsInputProps):IControlsProps => {
    return {};
});

const connect = inject<IControlsInputProps, ControlsProps>(mergeProps(
    injectControlsProps,
));

export const Controls = connect(ControlsComponent);
