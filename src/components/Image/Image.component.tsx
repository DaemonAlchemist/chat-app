import { PictureFilled } from "@ant-design/icons";
import {ImageProps} from "./Image.d";
import styles from './Image.module.scss';

export const ImageComponent = ({width, height}:ImageProps) =>
    <div className={styles.image} style={{width: `${width}px`, height: `${height}px`}}>
        <PictureFilled />
    </div>;
