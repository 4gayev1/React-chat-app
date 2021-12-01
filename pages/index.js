import React, { useContext } from "react";
import classes from "../styles/Login.module.css";
import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "d02e0832-0c64-4e89-967e-f4f5ccd95246" } }
      )

      .then((r) => {
        router.push("/chats");
      });
  }

  return (
    <div className={classes.background}>
      <div className={classes.authcontainer}>
        <form className={classes.authform} onSubmit={(e) => onSubmit(e)}>
          <div className={classes.authtitle}>NEXT.js Chat</div>

          <div className={classes.inputcontainer}>
            <input
              placeholder="Username"
              className={classes.textinput}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={classes.inputcontainer}>
            <input
              type="password"
              placeholder="Password"
              className={classes.textinput}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className={classes.submitbutton}>
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;