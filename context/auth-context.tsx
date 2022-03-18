import { createContext } from "react";

export const AuthContext = createContext({
  auth: "",
  setAuth: (p: string) => {},
  setIsModalOpen: (p: any) => {},
});

// type AuthProviderProps = {
//   children: React.ReactNode;
// };

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
// };
