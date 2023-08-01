import { useEffect, useState } from "react";

const useFadeIn = (initialDelay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [initialDelay]);

  return isVisible;
};

export default useFadeIn;
