import { SketchPicker } from 'react-color';
import { useToggle } from "../../lib/useToggle";
import { ColorPickerProps } from "./ColorPicker.d";
import styles from './ColorPicker.module.scss';

export const ColorPickerComponent = ({color, onChange}:ColorPickerProps) => {
    const showPicker = useToggle();

    const saveColor = (color:any) => {
        console.log(color);
        onChange(color.hex);
        showPicker.off();
    }

    return <>
        <span className={styles.pickerButton} onClick={showPicker.on} style={{backgroundColor: color}}>
            &nbsp;
        </span>
        <div className={styles.picker} style={{display: showPicker.isOn ? "block" : "none"}}>
            <SketchPicker color={color} onChangeComplete={saveColor}/>
        </div>
    </>;
}
