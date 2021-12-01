import { Context } from "../context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";


function Chats() {

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(120vh - 212px)"
          projectID="33e115a8-4404-4ec4-9510-29a483c392d9"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );

}

export default Chats