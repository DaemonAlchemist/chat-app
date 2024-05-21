export type Mime     = "image" | "text" | "video" | "audio" | "message" | "alert" | "info" |"phone";
export type Priority = "urgent" | "important" | "info";
export type Mode     = "sync" | "async";
export type Audience = "personal" | "group";
export type Access   = "public" | "private";

export declare interface INotification {
    icon: string | null;
    userName: string;
    header: string;
    mime: Mime;
    priority: Priority;
    mode: Mode;
    audience: Audience;
    access: Access;
    date: string;
    images?: string[];
}