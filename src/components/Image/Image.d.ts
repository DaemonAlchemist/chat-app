export declare interface IImageProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IImageInputProps {
    src: string | null;
    onUpload: (src:string) => void;
    width: number;
    height: number;
}

export type ImageProps = IImageInputProps & IImageProps;