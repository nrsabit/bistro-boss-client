import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const { data: menu = [], isLoading: loader, refetch } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await fetch("https://bistro-boss-server-kohl.vercel.app/menus");
      return res.json();
    },
  });
  return [menu, loader, refetch];
};

export default useMenu;
