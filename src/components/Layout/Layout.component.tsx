import { Col, Row } from "antd";
import { useScreenHeight, useScreenWidth, useScreenZoom } from "../../lib/state";
import { Content } from "../Content";
import { Controls } from "../Controls";
import { Export } from "../Export";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./Layout.d";
import styles from './Layout.module.scss';

export const LayoutComponent = ({}:LayoutProps) => {
    const [height] = useScreenHeight();
    const [width] = useScreenWidth();
    const [zoom] = useScreenZoom();
    
    return <Row>
        <Col xs={6}>
            <Controls />
        </Col>
        <Col xs={12}>
            <Export>
                <div className={styles.screen} style={{height: `${height / zoom}px`, width: `${width / zoom}px`}}>
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </Export>
        </Col>
    </Row>;
}
