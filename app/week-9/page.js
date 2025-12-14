"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogin() {
    await gitHubSignIn();
  }

  async function handleLogout() {
    await firebaseSignOut();
  }

  return (
    <main className="p-6 bg-slate-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Week 9</h1>

      {!user ? (
        <button
          onClick={handleLogin}
          className="px-4 py-2 rounded bg-orange-400 text-black font-semibold"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="space-y-4">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <div className="flex gap-3">
            <Link
              className="px-4 py-2 rounded bg-green-400 text-black font-semibold"
              href="/week-9/shopping-list"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded bg-slate-700 text-white"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
