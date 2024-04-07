import { createInjector, inject, mergeProps } from "unstateless";
import {InlineControlComponent} from "./InlineControl.component";
import {IInlineControlInputProps, InlineControlProps, IInlineControlProps} from "./InlineControl.d";

const injectInlineControlProps = createInjector(({}:IInlineControlInputProps):IInlineControlProps => {
    return {};
});

const connect = inject<IInlineControlInputProps, InlineControlProps>(mergeProps(
    injectInlineControlProps,
));

export const InlineControl = connect(InlineControlComponent);
