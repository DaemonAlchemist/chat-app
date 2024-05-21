import { ThunderboltOutlined, WifiOutlined } from "@ant-design/icons";
import { useCurrentTime, useNotificationsPanel } from "../../lib/state";
import { Editable } from "../Editable";
import { HeaderProps } from "./Header.d";
import styles from './Header.module.scss';
import { Notifications } from "../Notifications";

export const HeaderComponent = ({}:HeaderProps) => {
    const [time, setTime] = useCurrentTime();
    const [open] = useNotificationsPanel();

    return <div className={styles.header}>
        <div className={styles.time}><Editable value={time} onChange={setTime} /></div>
        <div className={styles.status}>
            5G&nbsp;
            <WifiOutlined />&nbsp;
            <ThunderboltOutlined />
        </div>
        {open && <div className={styles.notifications}>
            <Notifications />
        </div>}
    </div>;
}