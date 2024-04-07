import { createInjector, inject, mergeProps } from "unstateless";
import {LayoutComponent} from "./Layout.component";
import {ILayoutInputProps, LayoutProps, ILayoutProps} from "./Layout.d";

const injectLayoutProps = createInjector(({}:ILayoutInputProps):ILayoutProps => {
    return {};
});

const connect = inject<ILayoutInputProps, LayoutProps>(mergeProps(
    injectLayoutProps,
));

export const Layout = connect(LayoutComponent);
