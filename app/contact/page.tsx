"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendlyProvider, CalendlyTrigger } from "@/components/calendly-popup"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, Send } from "lucide-react"
import { useState } from "react"

const services = [
  "Custom Systems Engineering",
  "Systems Integration and Automation",
  "IT Project Management",
  "IT Consultancy",
  "Not sure yet"
]

export default function ContactPage() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to get in touch with Canris.")
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <CalendlyProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-[#e6f3e5] px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold text-[#001920] md:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-xl text-[#001920]/70 leading-relaxed">
                Ready to discuss your systems requirements? Schedule a consultation, send us a message, or reach out on WhatsApp.
              </p>
            </div>
          </section>

          {/* Contact Content */}
          <section className="bg-white px-4 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-5">
                {/* Contact Info */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-[#001920]">Contact Information</h2>
                  <p className="mt-4 text-[#001920]/70">
                    Choose the method that works best for you. We typically respond within one business day.
                  </p>
                  
                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#001920] mb-3">Quick Actions</h3>
                      <div className="space-y-3">
                        <CalendlyTrigger>
                          <Button className="w-full justify-start bg-primary hover:bg-primary/90 text-white">
                            <Phone className="mr-2 h-4 w-4" />
                            Schedule a Systems Consultation
                          </Button>
                        </CalendlyTrigger>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start bg-white border-primary/30 text-[#001920] hover:bg-primary/5 hover:border-primary/50"
                          asChild
                        >
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            WhatsApp Us
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <h3 className="font-semibold text-[#001920] mb-3">Direct Contact</h3>
                      <div className="space-y-3">
                        <a
                          href="tel:+18687349490"
                          className="flex items-center gap-3 text-[#001920]/70 hover:text-primary transition-colors"
                        >
                          <Phone className="h-5 w-5" />
                          (868) 734-9490
                        </a>
                        <a
                          href="mailto:theccore.tt@gmail.com"
                          className="flex items-center gap-3 text-[#001920]/70 hover:text-primary transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                          hello@canriscore.net
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <div className="rounded-xl border border-border bg-white p-6 md:p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#001920]">Send an Enquiry</h2>
                    <p className="mt-2 text-[#001920]/60">
                      Tell us about your systems requirements and we will assess the right approach.
                    </p>
                    
                    {isSubmitted ? (
                      <div className="mt-8 rounded-xl bg-[#e6f3e5] p-6 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                          <Send className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#001920]">Message Sent!</h3>
                        <p className="mt-2 text-[#001920]/70">
                          Thanks for reaching out. We'll get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium text-[#001920] mb-1.5">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-[#001920] placeholder:text-[#001920]/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#001920] mb-1.5">
                              Company
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-[#001920] placeholder:text-[#001920]/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="Your company"
                            />
                          </div>
                        </div>
                        
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium text-[#001920] mb-1.5">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-[#001920] placeholder:text-[#001920]/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="you@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#001920] mb-1.5">
                              Phone / WhatsApp
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-[#001920] placeholder:text-[#001920]/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="(868) 123-4567"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#001920] mb-1.5">
                            Service of Interest
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-[#001920] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#001920] mb-1.5">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-[#001920] placeholder:text-[#001920]/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                            placeholder="Tell us about your project or needs..."
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-white h-11"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Enquiry"}
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </CalendlyProvider>
  )
}
