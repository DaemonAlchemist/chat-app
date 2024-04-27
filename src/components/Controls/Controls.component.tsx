import { Collapse, Switch } from "antd";
import {ControlsProps} from "./Controls.d";
import styles from './Controls.module.scss';
import { useInlineControls, useNotificationsPanel } from "../../lib/state";

export const ControlsComponent = ({}:ControlsProps) => {
    const [notificationsOpen, setNotificationsOpen] = useNotificationsPanel();
    const [inlineControls, setInlineControls] = useInlineControls();

    return <>
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
