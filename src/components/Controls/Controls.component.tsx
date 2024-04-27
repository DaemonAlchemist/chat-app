import { Button, Collapse, Switch } from "antd";
import {ControlsProps} from "./Controls.d";
import styles from './Controls.module.scss';
import { useInlineControls, useNotificationsPanel } from "../../lib/state";
import { FolderOpenOutlined, SaveOutlined } from "@ant-design/icons";
import { loadData, saveData } from "../../lib/save";

export const ControlsComponent = ({}:ControlsProps) => {
    const [notificationsOpen, setNotificationsOpen] = useNotificationsPanel();
    const [inlineControls, setInlineControls] = useInlineControls();

    const save = () => {saveData("Phone Data");}

    const load = () => {
        loadData().then(() => window.location.reload());
    }

    return <>
        <div>
            <Button type="link" onClick={save}><SaveOutlined /> Save</Button>
            <Button type="link" onClick={load}><FolderOpenOutlined /> Load</Button>
        </div>
        <Collapse>
            <Collapse.Panel header="Controls" key="controls">
                Inline Controls: <Switch
                    checkedChildren="Show"
                    unCheckedChildren="Hide"
                    checked={inlineControls}
                    onChange={setInlineControls}
                />
            </Collapse.Panel>
            <Collapse.Panel header="Header" key="header">
                Notifications: <Switch
                    checkedChildren="Open"
                    unCheckedChildren="Closed"
                    checked={notificationsOpen}
                    onChange={setNotificationsOpen}
                />
            </Collapse.Panel>
        </Collapse>
    </>;
}
