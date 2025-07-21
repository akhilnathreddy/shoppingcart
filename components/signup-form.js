'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { signup, loginWithGoogle } from '@/lib/auth';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function SignupForm({ className, ...props }) {
  useAuthRedirect();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password);
      router.replace('/');
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleGoogle() {
    setError('');
    try {
      await loginWithGoogle();
      router.replace('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                Sign up
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogle}
              >
                Sign up with Google
              </Button>
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
            )}

            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="underline underline-offset-4">
                Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
