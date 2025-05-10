"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

// export const metadata: Metadata = { // Metadata cannot be used in a Client Component
//   title: "Sign Up - Desmare",
//   description: "Create your Desmare account",
// };

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { email, password });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 border-b border-white/10">
        <div className="container-custom">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Desmare
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-card-bg border border-border rounded-xl p-8">
            <h1 className="text-2xl font-bold mb-6">Create your account</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="you@company.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="••••••••"
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary py-2"
              >
                Sign Up
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-text-secondary">
                Already have an account?{' '}
                <Link href="/login" className="text-accent hover:text-accent-hover">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

