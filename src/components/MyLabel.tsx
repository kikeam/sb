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
}

export const MyLabel = ({
  label = "no label",
  size = "normal",
  color = "secondary",
  AllCaps = false,
  fontcolor = "",
}: Props) => {
  return (
    <span
      className={`${size} text-${color}`}
      style={fontcolor ? { color: fontcolor } : {}}
    >
      {AllCaps ? label.toUpperCase() : label}
    </span>
  );
};
