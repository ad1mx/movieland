"use client";

import React, { createContext, useContext, useState } from "react";

const OnlineStatusContext = createContext(true);

const OnlineStatusProvider = ({ children }: { children: any }) => {
  const [onlineStatus, setOnlineStatus] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  if (typeof window !== "undefined") {
    window.addEventListener("offline", () => setOnlineStatus(false));
    window.addEventListener("online", () => setOnlineStatus(true));
  }

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export const useOnlineStatus = () => {
  const onlineStatus = useContext(OnlineStatusContext);
  return onlineStatus;
};

export default OnlineStatusProvider;
