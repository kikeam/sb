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

export const MyLabel = ({
  label = "no label",
  size = "normal",
  color = "secondary",
  AllCaps = false,
  fontcolor = "",
  backgroundColor = "",
  border = "",
}: Props) => {
  return (
    <span
      className={`${size} text-${color}`}
      style={{ color: fontcolor, backgroundColor, border }}
    >
      {AllCaps ? label.toUpperCase() : label}
    </span>
  );
};
