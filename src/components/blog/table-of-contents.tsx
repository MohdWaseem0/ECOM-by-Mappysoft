"use client"

import { useState, useEffect } from 'react'
import { FaList } from 'react-icons/fa'

export interface TableOfContentsItem {
  id: string
  text: string
  level: number
  children?: TableOfContentsItem[]
}

interface TableOfContentsProps {
  items?: TableOfContentsItem[]
  activeId?: string
  maxDepth?: number
}

/**
 * Table of Contents component that auto-generates or accepts TOC items
 * Uses IntersectionObserver to highlight active sections when scrolling
 */
export default function TableOfContents({ 
  items: providedItems, 
  activeId: providedActiveId,
  maxDepth = 3 
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | undefined>(providedActiveId)
  const [items, setItems] = useState<TableOfContentsItem[]>(providedItems || [])

  // Auto-generate table of contents from the page's headings if not provided
  useEffect(() => {
    if (providedItems && providedItems.length > 0) return

    // Query all headings from h2 to h4
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'))
      .filter(heading => {
        // Filter out headings inside components we don't want to include
        const isInExcludedComponent = 
          heading.closest('.toc-exclude') || 
          heading.closest('header') ||
          heading.closest('aside')
        
        return !isInExcludedComponent && heading.id
      })
      .map(heading => {
        // Get heading level (h2 = 2, h3 = 3, etc.)
        const level = parseInt(heading.tagName.substring(1), 10)
        
        return {
          id: heading.id,
          text: heading.textContent || '',
          level: level
        }
      })
      .filter(item => item.level <= maxDepth)

    // Build a hierarchical TOC structure
    const buildNestedTOC = (headings: TableOfContentsItem[]): TableOfContentsItem[] => {
      const toc: TableOfContentsItem[] = []
      const stack: TableOfContentsItem[] = []

      headings.forEach(heading => {
        while (stack.length && stack[stack.length - 1].level >= heading.level) {
          stack.pop()
        }

        if (stack.length === 0) {
          toc.push(heading)
          stack.push(heading)
        } else {
          const parent = stack[stack.length - 1]
          if (!parent.children) parent.children = []
          parent.children.push(heading)
          stack.push(heading)
        }
      })

      return toc
    }

    setItems(buildNestedTOC(headings))
  }, [providedItems, maxDepth])

  // Set up intersection observer to track which heading is currently in view
  useEffect(() => {
    if (providedActiveId !== undefined) return
    
    const headingElements = document.querySelectorAll('h2, h3, h4')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0.1
      }
    )
    
    headingElements.forEach((element) => observer.observe(element))
    
    return () => observer.disconnect()
  }, [providedActiveId, items])

  // Recursive rendering function for nested TOC
  const renderItems = (items: TableOfContentsItem[] = []) => {
    return (
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-1 transition-colors hover:text-primary 
                ${activeId === item.id 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground'
                }
                ${item.level === 2 ? '' : 'pl-4'}
                ${item.level === 4 ? 'pl-8' : ''}
              `}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.id)
                if (element) {
                  // Scroll to the element with a small offset from the top
                  const yOffset = -100
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
            >
              {item.text}
            </a>
            {item.children && item.children.length > 0 && renderItems(item.children)}
          </li>
        ))}
      </ul>
    )
  }

  if (items.length === 0) {
    return null
  }

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <h2 className="mb-4 flex items-center gap-2 text-sm font-medium">
        <FaList className="h-4 w-4 text-primary" />
        Table of Contents
      </h2>
      <nav className="toc">
        {renderItems(items)}
      </nav>
    </div>
  )
} 