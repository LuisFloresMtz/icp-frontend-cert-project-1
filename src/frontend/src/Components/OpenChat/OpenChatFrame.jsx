import { useEffect, useRef, useState } from "react";
import { initialise } from "@open-ic/openchat-xframe";
import { Typography, Container } from "@mui/material";

function initialiseOpenChatFrame(path, iframe, identity) {
  return initialise(iframe, {
    targetOrigin: "https://oc.app",
    initialPath: path,
    identity,
  });
}

function OpenChatFrame({ path, title, identity }) {
  const iframe = useRef(null);
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    if (iframe.current) {
      if (client === undefined) {
        setClient(initialiseOpenChatFrame(path, iframe.current, identity));
      } else {
        client.then((c) => c.changePath(path));
      }
    }
  }, [path, title, client]);

  return (
    <Container>
      <Typography gutterBottom variant="h5" component="div">
        <h3>{title}</h3>
      </Typography>

      <iframe
        ref={iframe}
        title="OpenChat"
        frameBorder="0"
        style={{ flex: 1, width: "100%", height: "120vh" }}
      />
    </Container>
  );
}

export default OpenChatFrame;
