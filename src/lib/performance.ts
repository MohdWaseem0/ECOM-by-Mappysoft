'use client'

/**
 * Utility functions for performance optimization
 */

/**
 * Lazy loads images that are not in the viewport
 * This is automatically handled by Next.js Image component,
 * but can be useful for background images or other non-Image elements
 */
export function setupLazyLoading() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return
  }

  const lazyImages = document.querySelectorAll('[data-lazy-bg]')
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLElement
        const bgSrc = img.getAttribute('data-lazy-bg')
        
        if (bgSrc) {
          img.style.backgroundImage = `url(${bgSrc})`
          img.removeAttribute('data-lazy-bg')
          imageObserver.unobserve(img)
        }
      }
    })
  })
  
  lazyImages.forEach((img) => {
    imageObserver.observe(img)
  })
}

/**
 * Defers non-critical CSS
 */
export function loadDeferredStyles() {
  if (typeof window === 'undefined') {
    return
  }
  
  const deferredStyles = document.querySelectorAll('link[data-defer]')
  
  deferredStyles.forEach((link) => {
    const href = link.getAttribute('href')
    if (href) {
      const newLink = document.createElement('link')
      newLink.rel = 'stylesheet'
      newLink.href = href
      document.head.appendChild(newLink)
      link.remove()
    }
  })
}

/**
 * Prefetches links that are likely to be clicked
 */
export function prefetchLinks() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return
  }
  
  const links = document.querySelectorAll('a[data-prefetch]')
  
  const linkObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const link = entry.target as HTMLAnchorElement
        const href = link.getAttribute('href')
        
        if (href && href.startsWith('/')) {
          const prefetchLink = document.createElement('link')
          prefetchLink.rel = 'prefetch'
          prefetchLink.href = href
          prefetchLink.as = 'document'
          document.head.appendChild(prefetchLink)
          linkObserver.unobserve(link)
        }
      }
    })
  })
  
  links.forEach((link) => {
    linkObserver.observe(link)
  })
}

/**
 * Initialize all performance optimizations
 */
export function initPerformanceOptimizations() {
  if (typeof window === 'undefined') {
    return
  }
  
  // Use requestIdleCallback for non-critical operations
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      setupLazyLoading()
      loadDeferredStyles()
      prefetchLinks()
    })
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(() => {
      setupLazyLoading()
      loadDeferredStyles()
      prefetchLinks()
    }, 1000)
  }
} 