import { useAuth0 } from "@auth0/auth0-react";

import Panel from "./panel";
import Login from "./login";
import Logout from "./logout";
import UserInfo from "./userInfo";

function Main() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Login></Login>;
  } else {
    return (
      <div>
        <Logout></Logout>
        <h1>Componente principal</h1>
        <UserInfo></UserInfo>
        <Panel></Panel>
      </div>
    );
  }
}

export default Main;
