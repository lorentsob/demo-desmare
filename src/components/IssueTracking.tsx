"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IssueTracking() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Streamlined Management</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Manage resources, track progress, and coordinate operations with a powerful yet intuitive interface.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2">Rich integration with GitHub</h3>
              <p className="text-text-secondary">
                Connect issues directly to code with powerful GitHub integration. Link pull requests, track code changes, and automate status updates.
              </p>
            </div>
            
            <div className="bg-card-bg border border-border rounded-xl overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-emerald-500/20 flex items-center justify-center">
                <p className="text-foreground font-medium">GitHub Integration</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2">Manage recurring work with Triage</h3>
              <p className="text-text-secondary">
                Prioritize incoming tasks efficiently with a dedicated triage workflow. Sort, assign, and schedule work in a streamlined process.
              </p>
            </div>
            
            <div className="bg-card-bg border border-border rounded-xl overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-accent/20 flex items-center justify-center">
                <p className="text-foreground font-medium">Triage Workflow</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-card-bg border border-border rounded-xl overflow-hidden"
        >
          <div className="w-full h-96 bg-gradient-to-br from-accent/10 via-purple-500/10 to-emerald-500/10 flex items-center justify-center p-10">
            <div className="text-center">
              <p className="text-foreground font-medium mb-2">Issue Analytics</p>
              <p className="text-text-secondary max-w-2xl">Visualize team velocity, task distribution, and project status with customizable charts and reports</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-card-bg border border-border rounded-xl p-5">
            <div className="text-accent mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-medium">Keyboard shortcuts</h4>
          </div>
          
          <div className="bg-card-bg border border-border rounded-xl p-5">
            <div className="text-accent mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-medium">Time tracking</h4>
          </div>
          
          <div className="bg-card-bg border border-border rounded-xl p-5">
            <div className="text-accent mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <h4 className="font-medium">Analytics</h4>
          </div>
          
          <div className="bg-card-bg border border-border rounded-xl p-5">
            <div className="text-accent mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <h4 className="font-medium">AI assistance</h4>
          </div>
        </motion.div>
      </div>
    </section>
  )
}