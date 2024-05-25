import { Input } from "antd";
import { useEffect, useState } from "react";
import { onInputChange } from "../../lib/onInputChange";
import { EditableProps } from "./Editable.d";
import styles from './Editable.module.scss';

export const EditableComponent = ({value, onChange, placeholder, textArea, autofit}:EditableProps) => { 
    const Component = textArea ? Input.TextArea : Input;

    const [width, setWidth] =  useState(value.length);

    useEffect(() => {
        if(autofit) {
            setWidth(value.length);
        }
    }, [value]);

    return <Component
        value={value}
        className={styles.editable}
        onChange={onInputChange(onChange)}
        placeholder={placeholder}
        autoSize
        style={autofit ? {width: `calc(${width}ch + 8px)`} : {}}
    />;
}
