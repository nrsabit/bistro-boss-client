import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
  const { user, loader } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      if (!loader && user?.email) {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data.admin;
      }
    },
    enabled: !loader && !!user?.email,
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
