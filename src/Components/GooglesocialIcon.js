import React from "react";
import ReactGoogleLogin from "react-google-login";
export default function GoogleLogin(props) {
  const onResponse = (resp) => {
    console.log(resp);
  };
  return (
    <ReactGoogleLogin
      clientId="<Your Client ID Here>" // We created this earlier, remember?
      buttonText="Login with Google"
      onSuccess={onResponse}
      onFailure={onResponse}
    />
  );
}
