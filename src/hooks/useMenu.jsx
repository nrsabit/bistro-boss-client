import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const { data: menu = [], isLoading: loader, refetch } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menus");
      return res.json();
    },
  });
  return [menu, loader, refetch];
};

export default useMenu;
