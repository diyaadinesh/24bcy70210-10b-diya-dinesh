"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");

  // ✅ Register
  const register = async () => {
    try {
      await axios.post(
        "/api/auth/register",
        {
          name: "Vaishnavi",
          email: "test@gmail.com",
          password: "123456",
        },
        { withCredentials: true }
      );
      alert("Registered ✅");
    } catch (err) {
      console.log(err);
      alert("Register failed ❌");
    }
  };

  // ✅ Login
  const login = async () => {
    try {
      await axios.post(
        "/api/auth/login",
        {
          email: "test@gmail.com",
          password: "123456",
        },
        { withCredentials: true }
      );
      alert("Logged in ✅");
    } catch (err) {
      console.log(err);
      alert("Login failed ❌");
    }
  };

  // ✅ Create Post
  const createPost = async () => {
    try {
      await axios.post(
        "/api/posts",
        {
          title,
          description: "Demo",
        },
        {
          withCredentials: true, // 🔥 VERY IMPORTANT
        }
      );
      alert("Post created 🎉");
    } catch (err: any) {
      console.log(err);
      alert("Error: " + err.response?.status);
    }
  };

  return (
    <div className="p-10 space-y-4">
      {/* Register & Login */}
      <div className="space-x-2">
        <button onClick={register} className="bg-green-500 text-white p-2">
          Register
        </button>

        <button onClick={login} className="bg-yellow-500 text-white p-2">
          Login
        </button>
      </div>

      {/* Create Post */}
      <div>
        <input
          placeholder="Enter post title..."
          className="border p-2 text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPost}
          className="ml-2 bg-blue-500 text-white p-2"
        >
          Create Post
        </button>
      </div>
    </div>
  );
}