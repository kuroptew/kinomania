import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

const MovieFilters = ({ children }: Props) => {
  return (
    <div className={styles.filters}>{children}</div>
  )
}

export default MovieFilters;