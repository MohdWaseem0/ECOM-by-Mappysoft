import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold md:text-6xl">404</h1>
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Page Not Found</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        Return to Homepage
      </Link>
    </div>
  )
} 