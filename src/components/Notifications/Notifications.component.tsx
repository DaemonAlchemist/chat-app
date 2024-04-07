import { PlusOutlined } from "@ant-design/icons";
import { useNotifications, useNotificationsPanel } from "../../lib/state";
import { Editable } from "../Editable";
import { Image } from "../Image";
import { InlineControl } from "../InlineControl";
import { NotificationsProps } from "./Notifications.d";
import styles from './Notifications.module.scss';

export const NotificationsComponent = ({}:NotificationsProps) => {
    const [open] = useNotificationsPanel();
    const {notifications, update} = useNotifications();

    return <div className={styles.notificationPanel} style={{visibility: open ? "visible" : "hidden"}}>
        {notifications.map((notice, i) => <div className={styles.notice}>
            <div className={styles.icon}>
                <Image src={notice.icon} onUpload={update.icon(i)} width={32} height={32}/>
            </div>
            <span className={styles.header}>
                <b><Editable value={notice.userName} onChange={update.userName(i)} autofit/></b> <Editable value={notice.header} onChange={update.header(i)} autofit/>
            </span>
        </div>)}
        <InlineControl>
            <div className={styles.addBtn}>
                <PlusOutlined onClick={update.add}/>
            </div>
        </InlineControl>
    </div>;
}
