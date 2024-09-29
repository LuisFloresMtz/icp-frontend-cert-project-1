import React from "react";
import { useContext, useState } from "react";
import OpenChatFrame from "./OpenChatFrame";
export default function Announcements() {
  const [chat, setChat] = useState({
    path: "community/dgegb-daaaa-aaaar-arlhq-cai/channel/12148470416168947889486180374669069959",
    title: "Announcements",
  });
  return <OpenChatFrame {...chat} />;
}
