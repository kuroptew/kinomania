import { Select } from "antd";

import "./antd-styles.scss"
import styles from "./styles.module.scss";

interface Props {
  title: string;
  options: { value: string | number, label: string }[];
  handleChange: (value: string) => void;
  defaultValue?: string;
}

const SelectFilter = ({ title, options, handleChange, defaultValue }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <Select
        className={styles.select}
        defaultValue={defaultValue ? defaultValue : options[0].label}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default SelectFilter;