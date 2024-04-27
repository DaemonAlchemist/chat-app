import { AlertOutlined, CommentOutlined, EnvironmentOutlined, ForwardOutlined, InfoCircleOutlined, LikeOutlined, MailOutlined, MessageOutlined, PhoneFilled, PhoneOutlined, PictureOutlined, PlusOutlined, RollbackOutlined, ShareAltOutlined, SoundOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Index } from "ts-functional/dist/types";
import { INotification, Mime } from "../../lib/phoneData";
import { useNotifications, useNotificationsPanel } from "../../lib/state";
import { DeleteBtn } from "../DeleteBtn";
import { Editable } from "../Editable";
import { Image } from "../Image";
import { InlineControl } from "../InlineControl";
import { NotificationsProps } from "./Notifications.d";
import styles from './Notifications.module.scss';
import clsx from "clsx";
import { Button } from "antd";

export const NotificationsComponent = ({}:NotificationsProps) => {
    const [open] = useNotificationsPanel();
    const {notifications, update} = useNotifications();

    const rotate = (notice:INotification, i:number) => () => {
        const mapping:Index<Mime> = {
            text: "image",
            image: "video",
            video: "audio",
            audio: "message",
            message: "alert",
            alert: "info",
            info: "phone",
            phone: "text",
        };
        update.mime(i)(mapping[notice.mime]);
    }

    return <div className={styles.notificationPanel} style={{visibility: open ? "visible" : "hidden"}}>
        {notifications.map((notice, i) => <div className={clsx([styles.notice, styles[notice.mime]])}>
            <InlineControl>
                <DeleteBtn onClick={update.remove(i)} />
            </InlineControl>
            <div className={styles.icon}>
                <Image src={notice.icon} onUpload={update.icon(i)} width={44} height={44}/>
                <div className={styles.mime} onClick={rotate(notice, i)}>
                    {notice.mime === "text" && <MessageOutlined />}
                    {notice.mime === "image" && <PictureOutlined />}
                    {notice.mime === "video" && <VideoCameraOutlined />}
                    {notice.mime === "audio" && <SoundOutlined />}
                    {notice.mime === "message" && <MailOutlined />}
                    {notice.mime === "alert" && <AlertOutlined />}
                    {notice.mime === "info" && <InfoCircleOutlined />}
                    {notice.mime === "phone" && <PhoneOutlined />}
                </div>
            </div>
            <span className={styles.header}>
                <div className={styles.dateEdit}>
                    <Editable value={notice.date} onChange={update.date(i)} autofit placeholder="date"/>
                </div>
                <b><Editable value={notice.userName} onChange={update.userName(i)} autofit/></b><br/>
                <Editable value={notice.header} onChange={update.header(i)} textArea/>
            </span>
            <hr/>
            <div className={styles.controls}>
                {notice.mime === "text" && <>
                    <Button type="link"><MessageOutlined /> Reply</Button>
                    <Button type="link"><PhoneFilled/> Call</Button>
                </>}
                {notice.mime === "image" && <>
                    <Button type="link"><CommentOutlined /> Comment</Button>
                    <Button type="link"><PictureOutlined /> View</Button>
                    <Button type="link"><LikeOutlined /> Like</Button>
                </>}
                {notice.mime === "video" && <>
                    <Button type="link"><CommentOutlined /> Comment</Button>
                    <Button type="link"><VideoCameraOutlined /> View</Button>
                    <Button type="link"><LikeOutlined /> Like</Button>
                </>}
                {notice.mime === "audio" && <>
                    <Button type="link"><CommentOutlined /> Comment</Button>
                    <Button type="link"><SoundOutlined /> Listen</Button>
                    <Button type="link"><LikeOutlined /> Like</Button>
                </>}
                {notice.mime === "message" && <>
                    <Button type="link"><MailOutlined /> Reply</Button>
                    <Button type="link"><ForwardOutlined /> Forward</Button>
                </>}
                {notice.mime === "alert" && <>
                    <Button type="link"><ShareAltOutlined /> Share</Button>
                    <Button type="link"><EnvironmentOutlined /> Check-in</Button>
                </>}
                {notice.mime === "info" && <>
                    <Button type="link"><CommentOutlined /> Comment</Button>
                    <Button type="link"><InfoCircleOutlined /> View</Button>
                    <Button type="link"><LikeOutlined /> Like</Button>
                </>}
                {notice.mime === "phone" && <>
                    <Button type="link"><RollbackOutlined /> Reply</Button>
                    <Button type="link"><PhoneFilled/> Call</Button>
                </>}
            </div>
        </div>)}
        <InlineControl>
            <div className={styles.addBtn}>
                <PlusOutlined onClick={update.add}/>
            </div>
        </InlineControl>
    </div>;
}
