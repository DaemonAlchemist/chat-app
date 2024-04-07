import { ContentProps } from "./Content.d";
import styles from './Content.module.scss';
import {Chat} from "../Chat";

export const ContentComponent = ({}:ContentProps) => {
    return <div className={styles.content}>
        <Chat />
    </div>;
}
