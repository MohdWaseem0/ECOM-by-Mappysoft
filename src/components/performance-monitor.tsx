'use client'

import { useEffect } from 'react'
import { initPerformanceOptimizations } from '@/lib/performance'

// Define the missing types
interface PerformanceEntryWithDelay extends PerformanceEntry {
  processingStart?: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Initialize performance optimizations
    initPerformanceOptimizations()

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window && 'PerformanceObserver' in window) {
      try {
        // Report LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log('LCP:', lastEntry.startTime)
          // Here you would send this data to your analytics
        })
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
        
        // Report FID (First Input Delay)
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntryWithDelay
            if (fidEntry.processingStart) {
              const delay = fidEntry.processingStart - fidEntry.startTime
              console.log('FID:', delay)
              // Here you would send this data to your analytics
            }
          })
        })
        
        fidObserver.observe({ type: 'first-input', buffered: true })
        
        // Report CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((entryList) => {
          let clsValue = 0
          
          for (const entry of entryList.getEntries()) {
            const layoutShiftEntry = entry as LayoutShiftEntry
            if (layoutShiftEntry.value && !layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value
            }
          }
          
          console.log('CLS:', clsValue)
          // Here you would send this data to your analytics
        })
        
        clsObserver.observe({ type: 'layout-shift', buffered: true })
      } catch (error) {
        console.error('Error setting up performance monitoring:', error)
      }
    }
    
    return () => {
      // Clean up observers if needed
    }
  }, [])

  // This component doesn't render anything
  return null
} 