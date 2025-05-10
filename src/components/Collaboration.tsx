"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Collaboration() {
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Connected Business Solutions</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Seamlessly integrate systems and enhance coordination across your entire organization.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-card-bg border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Real-time collaboration</h3>
            <p className="text-text-secondary mb-6">
              Work together with your team in real-time. See who's viewing an issue, track changes, and collaborate on documents simultaneously.
            </p>
            <div className="bg-background rounded-lg p-4 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <span className="text-accent font-medium">JD</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <span className="text-purple-500 font-medium">KL</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                  <span className="text-emerald-500 font-medium">RH</span>
                </div>
                <div className="text-text-secondary text-sm ml-2">3 collaborators online</div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-border/50 rounded w-full"></div>
                <div className="h-4 bg-border/50 rounded w-3/4"></div>
                <div className="h-4 bg-border/50 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-card-bg border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Integrated workflows</h3>
            <p className="text-text-secondary mb-6">
              Connect with the tools your team already uses. Seamless integrations with Slack, GitHub, Figma, and more.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4 border border-border flex items-center justify-center">
                <span className="text-sm">Slack</span>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border flex items-center justify-center">
                <span className="text-sm">GitHub</span>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border flex items-center justify-center">
                <span className="text-sm">Figma</span>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border flex items-center justify-center">
                <span className="text-sm">Notion</span>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border flex items-center justify-center">
                <span className="text-sm">Google</span>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border flex items-center justify-center text-text-secondary">
                <span>+20 more</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card-bg border border-border rounded-xl overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-4">Advanced data visualization</h3>
            <p className="text-text-secondary mb-6">
              Gain insights with powerful data visualization tools. Track velocity, monitor progress, and identify bottlenecks.
            </p>
          </div>
          <div className="w-full h-72 bg-gradient-to-br from-accent/10 via-purple-500/10 to-emerald-500/10 flex items-center justify-center">
            <p className="text-foreground font-medium">Data Visualization</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}