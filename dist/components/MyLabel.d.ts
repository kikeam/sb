/// <reference types="react" />
import "./MyLabel.css";
export interface Props {
    /**
     * Label Text
     */
    label: string;
    /**
     * Size of the label
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Color of the label
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * If true, the label will be rendered in all caps
     */
    AllCaps?: boolean;
    /**
     * Font color of the label
     */
    fontcolor?: string;
    /**
     * Background color of the label
     */
    backgroundColor?: string;
    /**
     * If true, the label will be rendered with a border
     */
    border?: string;
}
export declare const MyLabel: ({ label, size, color, AllCaps, fontcolor, backgroundColor, border, }: Props) => JSX.Element;
