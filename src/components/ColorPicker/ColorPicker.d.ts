export declare interface IColorPickerProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IColorPickerInputProps {
    color: string;
    onChange: (newColor:string) => void;
}

export type ColorPickerProps = IColorPickerInputProps & IColorPickerProps;