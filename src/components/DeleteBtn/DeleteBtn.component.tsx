import { Button, Typography } from "antd";
import {DeleteBtnProps} from "./DeleteBtn.d";
import styles from './DeleteBtn.module.scss';
import { DeleteOutlined } from "@ant-design/icons";

export const DeleteBtnComponent = ({onClick}:DeleteBtnProps) => <div className={styles.deleteBtn}>
    <Button type="link" onClick={onClick} >
        <Typography.Text type="danger"><DeleteOutlined /></Typography.Text>
    </Button>
</div>;
