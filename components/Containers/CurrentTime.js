import React, { useState, useEffect } from "react";
import styles from "@/styles/_navbar.module.scss";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p className={styles.time__new}>{currentTime.toLocaleTimeString()}</p>;
}

export default CurrentTime;
