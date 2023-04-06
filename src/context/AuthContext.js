

import React, {useState, createContext} from "react";

export const AuthContext = createContext();


export const AuthLayout = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged , setIsLogged] = useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        console.log('sign in')
        setIsLoading(false);
        setIsLogged(true);
      },
      signUp: () => {
        setIsLoading(false);
      },
      signOut: () => {
        console.log('sign out')
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
    <AuthContext.Provider value={{isLogged, authContext}}>
        {children}
    </AuthContext.Provider>
  );
};
