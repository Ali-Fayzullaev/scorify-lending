'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4 script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `
    document.head.appendChild(script2)

    // Define gtag function globally
    window.gtag = function(command: string, targetId: string, config?: any) {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push(arguments)
      }
    }
  }, [])

  return null
}

// Helper function for tracking CTA clicks
export function trackCTAClick(ctaName: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: ctaName,
      custom_parameter_1: location,
    })
  }
}

// Helper function for tracking form submissions
export function trackFormSubmit(formName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Form',
      event_label: formName,
    })
  }
}