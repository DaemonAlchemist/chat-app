import { useRef } from "react";
import { PictureFilled } from "@ant-design/icons";
import { ImageProps } from "./Image.d";
import styles from './Image.module.scss';

export const ImageComponent = ({ src, onUpload, width, height }: ImageProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    const base64String = reader.result.toString();
                    onUpload(base64String);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.image} style={{ width: `${width}px`, height: `${height}px` }} onClick={handleIconClick}>
            {!!src ? <img src={src} width={width} height={height} /> : <PictureFilled />}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
            />
        </div>
    );
};
