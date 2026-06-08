"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, Loader2, CheckCircle } from "lucide-react"
import { useState, createContext, useContext } from "react"

const services = [
  "Starter Website - $150 USD",
  "Growth Website - $450 USD",
  "Accelerator Website - $1,499 USD",
  "Starter Maintenance - $30 USD/month",
  "Growth Maintenance - $79 USD/month",
  "Accelerator Maintenance - $149 USD/month",
  "Custom Project",
]

type QuoteModalContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

const QuoteModalContext = createContext<QuoteModalContextType | null>(null)

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <QuoteModalContext.Provider value={{ open, setOpen }}>
      <Dialog open={open} onOpenChange={setOpen}>
        {children}
        <QuoteModalContent />
      </Dialog>
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider")
  }
  return context
}

export function QuoteModalTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <DialogTrigger asChild className={className}>
      {children}
    </DialogTrigger>
  )
}

function QuoteModalContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const { setOpen } = useQuoteModal()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      businessName: formData.get("businessName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      details: formData.get("details") as string,
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send request")
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setOpen(false)
        setIsSubmitted(false)
        // Scroll to hero section after closing
        const heroSection = document.getElementById("hero")
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth" })
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }, 3000)
    } catch {
      setError("Something went wrong. Please try again or contact us via WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <DialogContent className="sm:max-w-md border-primary/30 bg-card/95 backdrop-blur">
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">Request Sent!</DialogTitle>
          <DialogDescription className="mt-2">
            {"Thank you for your interest. We'll get back to you as soon as possible."}
          </DialogDescription>
        </div>
      </DialogContent>
    )
  }

  return (
    <DialogContent className="sm:max-w-xl border-border/50 bg-card/95 backdrop-blur max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">
          Request a <span className="text-primary">Quote</span>
        </DialogTitle>
        <DialogDescription>
          {"Fill out the form below and we'll get back to you as soon as possible."}
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-5 mt-4">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="modal-name">
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="modal-name"
              name="name"
              placeholder="John Smith"
              required
              className="bg-background/50 border-border/50 focus:border-primary/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-businessName">Business Name</Label>
            <Input
              id="modal-businessName"
              name="businessName"
              placeholder="Your Company Ltd"
              className="bg-background/50 border-border/50 focus:border-primary/50"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="modal-phone">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="modal-phone"
              name="phone"
              type="tel"
              placeholder="(868) 123-4567"
              required
              className="bg-background/50 border-border/50 focus:border-primary/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-email">Email Address</Label>
            <Input
              id="modal-email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className="bg-background/50 border-border/50 focus:border-primary/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="modal-service">
            Service Needed <span className="text-destructive">*</span>
          </Label>
          <Select name="service" required>
            <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary/50">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="modal-details">Additional Details</Label>
          <Textarea
            id="modal-details"
            name="details"
            placeholder="Tell us about your business and any specific requirements..."
            rows={3}
            className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
          />
        </div>

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-base shadow-[0_0_20px_rgba(0,220,220,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(0,220,220,0.5)]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </DialogContent>
  )
}
