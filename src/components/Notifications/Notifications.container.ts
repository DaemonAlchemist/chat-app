import { createInjector, inject, mergeProps } from "unstateless";
import {NotificationsComponent} from "./Notifications.component";
import {INotificationsInputProps, NotificationsProps, INotificationsProps} from "./Notifications.d";

const injectNotificationsProps = createInjector(({}:INotificationsInputProps):INotificationsProps => {
    return {};
});

const connect = inject<INotificationsInputProps, NotificationsProps>(mergeProps(
    injectNotificationsProps,
));

export const Notifications = connect(NotificationsComponent);
