
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { logout } from '@/lib/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => setUser(currentUser));
    return () => unsub();
  }, []);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <h2 className="text-xl font-bold text-gray-800">
          <Link href="/">INSHOP</Link>
        </h2>

        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {user ? (
            <button
              onClick={logout}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <hr />
    </header>
  );
}
