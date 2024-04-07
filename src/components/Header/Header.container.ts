import { createInjector, inject, mergeProps } from "unstateless";
import {HeaderComponent} from "./Header.component";
import {IHeaderInputProps, HeaderProps, IHeaderProps} from "./Header.d";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    return {};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = connect(HeaderComponent);
