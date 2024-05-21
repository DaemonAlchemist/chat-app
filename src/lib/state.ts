import moment from "moment";
import { useLocalStorage } from "unstateless";
import { INotification } from "./phoneData";

// Screen size
export const useScreenHeight = useLocalStorage.number("screenHeight", 1792);
export const useScreenWidth  = useLocalStorage.number("screenWidth",   828);
export const useScreenZoom   = useLocalStorage.number("screenZoom",      2);

// Header data
export const useCurrentTime = useLocalStorage.string("currentTime", moment(Date.now()).format("h:m:s"));
export const useNotificationsPanel = useLocalStorage.boolean("notificationsOpen", false);

// Controls
export const useInlineControls = useLocalStorage.boolean("inlineControls", false);

// Notifications
const emptyNotice:INotification = {
    icon: null,
    userName: "Unidentified",
    header: "sent you a message",
    mime: "text",
    priority: "info",
    mode: "async",
    audience: "personal",
    access: "private",
    date: "",
    images: [],
};

const filterByIndex = <T>(index:number) => (_:T, i:number) => i !== index;
const removeItem = <T>(index:number) => (old:T[]) => old.filter(filterByIndex(index));

export const useNotificationData = useLocalStorage.object<INotification[]>("notifications", []);
export const useNotifications = () => {
    const [notifications, setNotifications] = useNotificationData();

    const add = () => {
        setNotifications(old => [...old, emptyNotice]);
    }

    const remove = (index:number) => () => {
        setNotifications(removeItem(index));
    }

    const updateAttribute = (field:keyof INotification) => (index:number) => (value:string) => {
        setNotifications(old => old.map((notice, i) => i !== index ? notice : {
            ...notice,
            [field]: value
        }));
    }

    const addImage = (index:number) => (src:string) => {
        setNotifications(old => old.map((notice, i) => i !== index ? notice : {
            ...notice,
            images: [...notice.images || [], src],
        }));
    }

    const removeImage = (index:number) => (imgIndex:number) => {
        setNotifications(old => old.map((notice, i) => i !== index ? notice : {
            ...notice,
            images: removeItem<string>(imgIndex)(notice.images || []),
        }));
    }

    const update = {
        add, remove,
        icon:     updateAttribute("icon"),
        userName: updateAttribute("userName"),
        header:   updateAttribute("header"),
        mime:     updateAttribute("mime"),
        priority: updateAttribute("priority"),
        mode:     updateAttribute("mode"),
        audience: updateAttribute("audience"),
        access:   updateAttribute("access"),
        date:     updateAttribute("date"),
        image: {
            add: addImage,
            remove: removeImage,
        }
    }

    return {notifications, update};
}