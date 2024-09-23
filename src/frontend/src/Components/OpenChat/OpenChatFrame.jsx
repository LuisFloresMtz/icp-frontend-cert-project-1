import { useEffect, useRef, useState } from "react";
import { initialise } from "@open-ic/openchat-xframe";

const purple = "rgb(182, 95, 247)";
const txt = "#ffffff";
const txtLight = "#efefef";
const background = "#242424";

function initialiseOpenChatFrame(path, iframe) {
  return initialise(iframe, {
    targetOrigin: "https://ic0.app",
    initialPath: path,
    theme: {
      name: "vaultbet",
      base: "dark",
      overrides: {
        burst: false,
        primary: purple,
        bd: purple,
        bg: background,
        txt: txt,
        placeholder: txtLight,
        "txt-light": txtLight,
        timeline: {
          txt: txt,
        },
        time: {
          txt: txt,
          icon: txt,
        },
        menu: {
          bd: purple,
          separator: purple,
        },
        scrollbar: {
          bg: purple,
        },
        button: {
          bg: purple,
          hv: purple,
        },
        icon: {
          txt: txtLight,
        },
        currentChat: {
          date: {
            bd: `solid 1px ${purple}`,
            bg: "rgba(0,0,0,0.8)",
            txt: txtLight,
          },
          msg: {
            bd: `solid 1px ${purple}`,
            me: {
              bg: purple,
              txt: "#fff",
            },
            txt: txt,
          },
        },
      },
    },
  });
}

function OpenChatFrame({ path, title }) {
  const iframe = useRef(null);
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    if (iframe.current) {
      if (client === undefined) {
        setClient(initialiseOpenChatFrame(path, iframe.current));
      } else {
        client.then((c) => c.changePath(path));
      }
    }
  }, [path, title, client]);

  return (
    <div className="chat">
      <div className="header">
        <h3>{title}</h3>
      </div>

      <iframe ref={iframe} title="OpenChat" frameBorder="0" />
    </div>
  );
}

export default OpenChatFrame;
