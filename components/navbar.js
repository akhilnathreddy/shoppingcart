'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { logout } from '@/lib/auth';
import { useCart } from '@/lib/Cartcontext';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getTotalItems, setIsCartOpen } = useCart();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
          INSHOP
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
          {loading ? (
            <div className="text-base font-medium text-gray-500">
              Loading...
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {user.photoURL && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                )}
                <span className="text-sm text-gray-600 hidden sm:block">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-base font-medium text-gray-700 hover:text-black transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="text-base font-medium text-gray-700 hover:text-black transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </div>
      <hr />
    </header>
  );
}
