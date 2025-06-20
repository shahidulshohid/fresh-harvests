"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface Users {
  id: string;
  fullName: string;
  userName: null;
  email: string;
  profileImage: null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const Users = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const getAllUsers = (params?: {
    email?: string;
    searTerm?: string;
    fullName?: string;
  }) => {
    axios
      .get("https://code-commando.com/api/v1/users", {
        params,
      })
      .then((res) => {
        console.log(res.data.data.data);
        setUsers(res.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
console.log(users)
  return (
    <div className="pt-30">
      <h1 className="text-center text-3xl">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {users?.map((item: Users) => (
          <div key={item?.id} className="bg-green-400 p-6">
            <h1>{item?.fullName}</h1>
            <div className="flex justify-between items-center gap-6">
              <p>{item?.role || "No Role"}</p>
              <p>{item?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
