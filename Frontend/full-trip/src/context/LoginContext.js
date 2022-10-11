import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export function LoginContextProvider(props) {
  const [userGlobal, setUserGlobal] = useState("");

  function cambiarUsuarioGlobal(nombreUsuario) {
    setUserGlobal(nombreUsuario);
  }

  useEffect(() => {
    setUserGlobal("userLogin");
  }, []);

  return (
    <LoginContext.Provider value={{ userGlobal, cambiarUsuarioGlobal }}>
      {props.children}
    </LoginContext.Provider>
  );
}
