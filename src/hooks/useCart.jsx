import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loader } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (!loader && user?.email) {
        const res = await axiosSecure.get(`/carts?email=${user?.email}`);
        return res.data;
      }
    },
    enabled: !loader && !!user?.email,
  });
  return [cart, refetch];
};

export default useCart;
