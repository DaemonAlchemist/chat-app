export declare interface IMessage {
    name: string;
    side: "left" | "right";
    bgColor: string;
    textColor: string;
    message: string;
}

export declare interface IChatProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IChatInputProps {

}

export type ChatProps = IChatInputProps & IChatProps;