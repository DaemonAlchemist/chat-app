import { createInjector, inject, mergeProps } from "unstateless";
import {ExportComponent} from "./Export.component";
import {IExportInputProps, ExportProps, IExportProps} from "./Export.d";

const injectExportProps = createInjector(({}:IExportInputProps):IExportProps => {
    return {};
});

const connect = inject<IExportInputProps, ExportProps>(mergeProps(
    injectExportProps,
));

export const Export = connect(ExportComponent);
