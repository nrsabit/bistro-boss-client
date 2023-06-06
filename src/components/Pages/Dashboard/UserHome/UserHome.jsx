import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full p-6">
      <h3 className="text-3xl font-semibold">Welcome Back, {user?.displayName}</h3>
    </div>
  );
};

export default UserHome;
