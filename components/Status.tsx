"use client";

import { useOnlineStatus } from "@/context/OnlineStatusProvider";
import { motion } from "framer-motion";
import { BiWifi, BiWifiOff } from "react-icons/bi";

const Status = () => {
  const isOnline = useOnlineStatus();

  return (
    <motion.div
      initial={{ bottom: "-100%" }}
      animate={{ bottom: isOnline ? "-100%" : 0 }}
      transition={{ delay: isOnline ? 3 : 0, ease: "easeIn" }}
      className="fixed bottom-0 z-10 w-full bg-zinc-900 py-2 border-t-[1px] border-slate-800 flex justify-center items-center gap-1"
    >
      {isOnline ? (
        <div className="text-green-500">
          <BiWifi />
        </div>
      ) : (
        <div className="text-gray-500">
          <BiWifiOff />
        </div>
      )}

      {isOnline ? "Back online." : "You're offline."}
    </motion.div>
  );
};

export default Status;
