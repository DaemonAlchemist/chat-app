import { ArrowLeftOutlined, ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import clsx from "clsx";
import { useLocalStorage } from "unstateless";
import { useInlineControls } from "../../lib/state";
import { ColorPicker } from "../ColorPicker";
import { DeleteBtn } from "../DeleteBtn";
import { Editable } from "../Editable";
import { ChatProps, IMessage } from "./Chat.d";
import styles from './Chat.module.scss';

const emptyMessage:IMessage = {
    name: "NewUser",
    side: "left",
    bgColor: "#aaffaa",
    textColor: "#000000",
    message: "",
}

const useMessages = () => {
    const [messages, setMessages] = useLocalStorage.object<IMessage[]>("messages", [])();

    const add = () => {setMessages(old => [...old, emptyMessage])}
    const remove = (index:number) => () => {setMessages(old => old.filter((_, i) => i !== index));}
    const update = <F extends keyof IMessage>(field:F) => (index:number) => (value:IMessage[F]) => {
        setMessages(old => old.map((msg, i) => i !== index ? msg : {
            ...msg,
            [field]: value,
        }));
    }
    const name = update("name");
    const side = update("side");
    const color = update("bgColor");
    const text = update("textColor");
    const message = update("message");

    return {messages, update: {add, remove, name, side, color, text, message}};
}

const useChatName = useLocalStorage.string("chatName", "");

export const ChatComponent = ({}:ChatProps) => {
    const {messages, update} = useMessages();
    const [name, setName] = useChatName();
    const [inlineControls] = useInlineControls();

    const [bgColor, setBgColor] = useLocalStorage.string("chatBgColor", "#ffffff")();
    const [textColor, setTextColor] = useLocalStorage.string("chatTextColor", "#000000")();

    return <div className={styles.chat} style={{backgroundColor: bgColor}}>
        {inlineControls && <div className={styles.bgColorPicker}>
            <ColorPicker color={bgColor} onChange={setBgColor} />
            &nbsp;
            <ColorPicker color={textColor} onChange={setTextColor} />
        </div>}
        <h1 style={{color: textColor}}>
            <Editable value={name} onChange={setName} placeholder="Chat name here" />
        </h1>
        <div className={styles.messages}>
            {messages.map((msg, i) => <div className={clsx([styles.message, styles[msg.side]])}>
                {inlineControls && msg.side === "right" && <Button type="link" onClick={() => update.side(i)("left")}><ArrowLeftOutlined /></Button>}
                <div style={{backgroundColor: msg.bgColor, color: msg.textColor}}>
                    {inlineControls && <div className={styles.colorPicker}>
                        <ColorPicker color={msg.bgColor} onChange={update.color(i)} />
                        &nbsp;
                        <ColorPicker color={msg.textColor} onChange={update.text(i)} />
                    </div>}
                    <Editable value={msg.message} onChange={update.message(i)} placeholder="Message here" textArea />
                    {inlineControls && <DeleteBtn onClick={update.remove(i)} />}
                </div>
                {inlineControls && msg.side === "left" && <Button type="link" onClick={() => update.side(i)("right")}><ArrowRightOutlined /></Button>}
            </div>)}
            {inlineControls && <div className={styles.addBtn}>
                <Button type="link" onClick={update.add}><PlusCircleOutlined /></Button>
            </div>}
        </div>
    </div>;
}