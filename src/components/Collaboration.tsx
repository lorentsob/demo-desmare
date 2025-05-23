'use client';

import { motion } from 'framer-motion';

export default function Collaboration() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            Enhanced collaboration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Work together seamlessly with your team. Share updates, track
            progress, and stay aligned on goals.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-xl border border-ui-border bg-ui-card-bg"
          >
            <div className="p-8">
              <h3 className="mb-4 text-xl font-semibold">Real-time updates</h3>
              <p className="mb-6 text-text-secondary">
                Stay in sync with your team through instant notifications and
                real-time updates on project progress.
              </p>
            </div>
            <div className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-primary/10 via-purple-500/10 to-emerald-500/10">
              <p className="font-medium text-foreground">Real-time Updates</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="overflow-hidden rounded-xl border border-ui-border bg-ui-card-bg"
          >
            <div className="p-8">
              <h3 className="mb-4 text-xl font-semibold">
                Advanced data visualization
              </h3>
              <p className="mb-6 text-text-secondary">
                Gain insights with powerful data visualization tools. Track
                velocity, monitor progress, and identify bottlenecks.
              </p>
            </div>
            <div className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-primary/10 via-purple-500/10 to-emerald-500/10">
              <p className="font-medium text-foreground">Data Visualization</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
