"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const OnlineStatusContext = createContext(true);

const OnlineStatusProvider = ({ children }: { children: any }) => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    setOnlineStatus(navigator.onLine);
    window.addEventListener("online", () => setOnlineStatus(true));
  }, []);

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
