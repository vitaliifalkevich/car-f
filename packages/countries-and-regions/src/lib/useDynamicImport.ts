import { useEffect } from "react";

const useDynamicImport = (asyncFn, onSuccess) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((data) => {
      if (isActive && data?.default) onSuccess(data?.default);
    });
    return () => {
      isActive = false;
    };
  }, [asyncFn, onSuccess]);
};

export default useDynamicImport;
