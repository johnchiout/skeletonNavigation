

import React from "react";

export const AuthContext = React.createContext();


export const AuthLayout = ({children}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogged , setIsLogged] = React.useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setIsLogged(true);
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setIsLogged(false);
      }
    };
  }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }

  return (
    <AuthContext.Provider value={{isLogged}}>
        {children}
    </AuthContext.Provider>
  );
};
