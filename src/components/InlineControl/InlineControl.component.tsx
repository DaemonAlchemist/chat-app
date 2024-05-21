import { useInlineControls } from "../../lib/state";
import { InlineControlProps } from "./InlineControl.d";

export const InlineControlComponent = ({children}:InlineControlProps) => {
    const [showControls] = useInlineControls();
    
    return showControls ? <>{children}</> : null;
}
