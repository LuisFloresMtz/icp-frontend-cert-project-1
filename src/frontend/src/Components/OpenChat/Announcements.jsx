import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import OpenChatFrame from "./OpenChatFrame";
import { Container } from "@mui/material";

export default function Announcements() {
  const { isAuthenticated, identity } = useContext(AuthContext);

  const [chat, setChat] = useState({
    path: "/community/dgegb-daaaa-aaaar-arlhq-cai/channel/12148470416168947889486180374669069959",
    title: "Announcements",
  });

  return <OpenChatFrame {...chat} />;
}
