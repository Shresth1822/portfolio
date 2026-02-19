"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate Supabase submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! (Mock)");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Have a project in mind or want to discuss blockchain tech? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Let&apos;s Connect</h3>
              <p className="text-muted-foreground text-lg">
                I&apos;m currently looking for new opportunities in Full Stack
                and Blockchain development. Whether you have a question or just
                want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:shresth.varshney22@gmail.com"
                className="flex items-center space-x-3 text-lg hover:text-blue-400 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <span>shresth.varshney22@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-lg">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-bold text-sm">IN</span>
                </div>
                <span>Mohali, India</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="icon" variant="outline" asChild>
                <Link href="https://github.com/Shresth1822" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <Link href="#" target="_blank">
                  {" "}
                  {/* Placeholder LinkedIN */}
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <Link href="#" target="_blank">
                  {" "}
                  {/* Placeholder Twitter */}
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
