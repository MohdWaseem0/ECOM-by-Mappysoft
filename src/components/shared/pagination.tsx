"use client"

import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { cn } from "@/utils/cn"

interface PaginationProps {
  totalPages: number
  currentPage: number
  baseUrl?: string
}

export default function Pagination({
  totalPages,
  currentPage,
  baseUrl = "",
}: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages is less than or equal to maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always show first page
      pageNumbers.push(1)

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if at the beginning or end
      if (currentPage <= 2) {
        end = 4
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis if needed
      if (start > 2) {
        pageNumbers.push("...")
      }

      // Add page range
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pageNumbers.push("...")
      }

      // Always show last page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="flex items-center justify-center">
      <ul className="flex items-center gap-1">
        {/* Previous button */}
        <li>
          <Link
            href={currentPage === 1 ? "#" : `${baseUrl}/page/${currentPage - 1}`}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md border text-sm",
              currentPage === 1
                ? "pointer-events-none border-muted text-muted-foreground"
                : "border-input hover:bg-accent hover:text-accent-foreground"
            )}
            aria-disabled={currentPage === 1}
          >
            <span className="sr-only">Previous Page</span>
            <FaChevronLeft className="h-4 w-4" />
          </Link>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="flex h-10 w-10 items-center justify-center text-sm text-muted-foreground">
                ...
              </span>
            ) : (
              <Link
                href={page === currentPage ? "#" : `${baseUrl}/page/${page}`}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-md text-sm",
                  page === currentPage
                    ? "bg-primary text-primary-foreground"
                    : "border border-input hover:bg-accent hover:text-accent-foreground"
                )}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <Link
            href={
              currentPage === totalPages
                ? "#"
                : `${baseUrl}/page/${currentPage + 1}`
            }
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md border text-sm",
              currentPage === totalPages
                ? "pointer-events-none border-muted text-muted-foreground"
                : "border-input hover:bg-accent hover:text-accent-foreground"
            )}
            aria-disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next Page</span>
            <FaChevronRight className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </nav>
  )
} 