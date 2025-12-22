import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useWinPercentage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { isLoading, data } = useQuery({
    queryKey: ["win-percentage", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/win-percentage?email=${user?.email}`);
      return res.data;
    },
  });
  return { winData: data, isLoading };
};

export default useWinPercentage;
