import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure(); // Secure axios instance

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosSecure.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [axiosSecure]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Photo</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Created At</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((user) => {
            // Check if role is defined; if not, set default to 'user'
            const role = user.role || "user";
            return (
              <tr key={user._id} className="border">
                <td className="border p-2">
                  <img
                    src={user.photo}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 text-white rounded ${
                      role === "admin" ? "bg-red-500" : "bg-blue-500"
                    }`}
                  >
                    {role}
                  </span>
                </td>
                <td className="border p-2">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
