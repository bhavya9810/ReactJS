import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  let [onlineStatus, setOnlineStatus] = useState(true);
  //check online or not, using onOnline event listener
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
