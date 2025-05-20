"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductDirection() {
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Strategic Solutions</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Move your business forward with confidence and align your organization toward a unified vision.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2">Strategic projects with focus</h3>
              <p className="text-text-secondary">
                Create clear objectives and milestones that keep your team aligned. Track progress and manage dependencies in one place.
              </p>
            </div>
            
            <div className="bg-card-bg border border-border rounded-xl overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                <p className="text-foreground font-medium">Product Roadmap</p>
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
              <h3 className="text-xl font-semibold mb-2">Project archives</h3>
              <p className="text-text-secondary">
                Keep a historical record of all completed projects. Learn from past initiatives and build institutional knowledge.
              </p>
            </div>
            
            <div className="bg-card-bg border border-border rounded-xl overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-primary/20 flex items-center justify-center">
                <p className="text-foreground font-medium">Project Archives</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-card-bg border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Status and priority</h3>
            <p className="text-text-secondary">
              Track work with customizable statuses and priorities that reflect your workflow.
            </p>
          </div>
          
          <div className="bg-card-bg border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Resource allocation</h3>
            <p className="text-text-secondary">
              Assign team members to projects and balance workloads effectively.
            </p>
          </div>
          
          <div className="bg-card-bg border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Progress reporting</h3>
            <p className="text-text-secondary">
              Generate visual reports that communicate progress to stakeholders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}