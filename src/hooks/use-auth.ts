import { AuthContext, UpdateAuthContext } from "@/providers/auth-provider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);

export const useUpdateAuth = () => useContext(UpdateAuthContext);
