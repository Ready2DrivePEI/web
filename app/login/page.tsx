"use client";
import { supabase } from "lib/supabaseClient";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [welcomeText, setWelcomeText] = useState("Welcome");
  const [newTask, setNewTask] = useState({password: "", email: ""}); 

 // Inserts into Supabase
   const handleSubmit = async (e:any) => {
    e.preventDefault(); // prevent form from reloading the page
   
    const { data, error } = await supabase
      .from("profiles") // correct method
      .insert([{ password: newTask.password, email: newTask.email }]);

    if (error) {
      console.error("Error inserting task:", error);
    } else {
      console.log("Task added:", data);
      setNewTask({ password: "", email: "" }); // reset form
    }
  }
    useEffect(() => {
      const visited = localStorage.getItem("r2d-visited");
      if (visited) {
        setWelcomeText("Welcome back");
      } else {
        localStorage.setItem("r2d-visited", "true");
      }
    }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-neutral-200 p-10 space-y-8">

        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            {welcomeText}
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Access your online course and track your driving progress.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              onChange={(e) => setNewTask(newTask => ({...newTask,email: e.target.value}))}
              className="w-full min-h-[48px] px-4 rounded-lg border border-neutral-300 bg-white text-sm text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-neutral-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                onChange={(e) => setNewTask(newTask => ({...newTask,password: e.target.value}))}
                className="w-full min-h-[48px] px-4 pr-12 rounded-lg border border-neutral-300 bg-white text-blue-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center text-neutral-500 hover:text-blue-600 focus:outline-none"
              >
                {showPassword ? (
                  // Eye Off
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.94 10.94 0 0112 19C7 19 2.73 15.11 1 12c.73-1.36 1.87-2.78 3.29-4.03M9.88 9.88A3 3 0 0014.12 14.12M1 1l22 22" />
                  </svg>
                ) : (
                  // Eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-neutral-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 focus:ring-2 focus:ring-blue-600"
              />
              Remember me
            </label>

            <Link
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full min-h-[48px] rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="relative text-center text-sm">
          <span className="absolute inset-x-0 top-1/2 h-px bg-neutral-200" />
          <span className="relative bg-white px-3 text-neutral-400">
            New student?
          </span>
        </div>

        {/* Secondary Action */}
        <Link
          href="/"
          className="block text-center text-sm font-medium text-neutral-700 hover:text-blue-600 transition"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}
