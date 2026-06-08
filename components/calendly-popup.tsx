"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const CalendlyContext = createContext<{
  open: boolean
  setOpen: (open: boolean) => void
} | null>(null)

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <CalendlyContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl h-[80vh] p-0 border-border/50 bg-card/95 backdrop-blur-xl overflow-hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full p-1.5 bg-background/80 hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <iframe
            src="https://calendly.com/canris"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a call with Canris"
            className="rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </CalendlyContext.Provider>
  )
}

export function CalendlyTrigger({ children }: { children: ReactNode }) {
  const context = useContext(CalendlyContext)
  if (!context) {
    throw new Error("CalendlyTrigger must be used within a CalendlyProvider")
  }

  return (
    <span onClick={() => context.setOpen(true)} className="cursor-pointer">
      {children}
    </span>
  )
}
