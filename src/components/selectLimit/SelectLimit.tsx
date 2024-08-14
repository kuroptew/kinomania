import { ChangeEvent } from 'react';

import styles from "./styles.module.scss";

interface Props {
  label?: string;
  limit: number;
  defaultValue?: string;
  options: number[],
  onLimitChange: (newLimit: number) => void;
}

const SelectLimit = ({ label, limit, onLimitChange, defaultValue, options }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onLimitChange(Number(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={label} className={styles.label}>{label}</label>}
      <select id={label} value={limit} onChange={handleChange} className={styles.select}>
        {defaultValue && <option value="" disabled className={styles.option}>{defaultValue}</option>}
        {options.map(option => {
          return <option className={styles.option} key={option} value={option}>
            {option}
          </option>
        }
        )}
      </select>
    </div>
  );
};

export default SelectLimit;