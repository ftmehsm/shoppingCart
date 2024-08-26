import { RotatingTriangles } from "react-loader-spinner";
import styles from "../styles/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <RotatingTriangles
        height="100px"
        width="100px"
      />
    </div>
  );
}

export default Loading;
