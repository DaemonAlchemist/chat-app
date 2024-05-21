import { createInjector, inject, mergeProps } from "unstateless";
import {ChatComponent} from "./Chat.component";
import {IChatInputProps, ChatProps, IChatProps} from "./Chat.d";

const injectChatProps = createInjector(({}:IChatInputProps):IChatProps => {
    return {};
});

const connect = inject<IChatInputProps, ChatProps>(mergeProps(
    injectChatProps,
));

export const Chat = connect(ChatComponent);
