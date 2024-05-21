import { useState } from "react";

export const useToggle = () => {
    const [isOn, setIsOn] = useState(false);

    const on = () => {setIsOn(true);}
    const off = () => {setIsOn(false);}
    const toggle = () => {setIsOn(old => !old);}

    return {isOn, on, off, toggle};
}