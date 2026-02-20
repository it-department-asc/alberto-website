"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Sparkles, Star, Shield } from "lucide-react";
import type { SanityMilestone, SanityValue, SanityStat } from "@/sanity/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Users,
  Sparkles,
  Heart,
  Target,
  Eye,
  Star,
  Shield,
};

interface AboutClientProps {
  heroLabel?: string;
  heroTitle?: string;
  heroTitleMuted?: string;
  heroDescription?: string;
  storyTitle?: string;
  storyTitleMuted?: string;
  companyDescription?: string;
  missionStatement?: string;
  visionStatement?: string;
  milestones: SanityMilestone[];
  values: SanityValue[];
  commitmentTitle?: string;
  commitmentText?: string;
  commitmentText2?: string;
  aboutStats: SanityStat[];
}

export default function AboutClient({
  heroLabel,
  heroTitle,
  heroTitleMuted,
  heroDescription,
  storyTitle,
  storyTitleMuted,
  companyDescription,
  missionStatement,
  visionStatement,
  milestones: milestonesProp,
  values: valuesProp,
  commitmentTitle,
  commitmentText,
  commitmentText2,
  aboutStats,
}: AboutClientProps) {
  const values = valuesProp;
  const milestones = milestonesProp;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6">
              {heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {heroTitle}
              <br />
              <span className="text-muted-foreground">{heroTitleMuted}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {storyTitle}
                <br />
                <span className="text-muted-foreground">{storyTitleMuted}</span>
              </h2>
              <div className="space-y-6 mt-8 text-muted-foreground leading-relaxed">
                {companyDescription ? (
                  companyDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">Content coming soon...</p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-background flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-foreground">40+</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Years of Excellence</h3>
                    <p className="text-muted-foreground mt-2">Serving Filipino Families</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg h-full bg-card">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {missionStatement || ""}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg h-full bg-card">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {visionStatement || ""}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Award;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full bg-card">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-6"
                      >
                        <IconComponent className="w-7 h-7 text-foreground" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Milestones Through The Years
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <Card className="flex-1 border-0 shadow-sm bg-card">
                  <CardContent className="p-6">
                    <p className="text-foreground font-medium">{milestone.event}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {commitmentTitle}
            </h2>
            {commitmentText && (
            <p className="text-lg text-background/70 mt-6 leading-relaxed">
              {commitmentText}
            </p>
            )}
            {commitmentText2 && (
            <p className="text-lg text-background/70 mt-4 leading-relaxed">
              {commitmentText2}
            </p>
            )}
            {aboutStats.length > 0 && (
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center space-x-8 text-background/80">
                {aboutStats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center space-x-8">
                    {index > 0 && <div className="w-px h-12 bg-background/30" />}
                    <div className="text-center">
                      <div className="text-4xl font-bold text-background">{stat.value}</div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
