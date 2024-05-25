import { ExportOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { ExportProps } from './Export';
import styles from "./Export.module.scss";

export const ExportComponent = ({children}:ExportProps) => {
  const componentRef = useRef(null);

  const exportAsImage = async () => {
    const element = componentRef.current;
    if(!!element) {
        const scale = 5; // Adjust this value for higher or lower resolution
        const canvas = await html2canvas(element, {
            scale: scale,
            useCORS: true,
        });
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'exported-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };

  return (
    <div>
      <div ref={componentRef}>
        {children}
      </div>
      <div className={styles.exportBtn}>
        <Button type="link" onClick={exportAsImage}> <ExportOutlined /> Export Screen</Button>
      </div>
    </div>
  );
};
