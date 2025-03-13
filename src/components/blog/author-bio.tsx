import Image from "next/image"
import { FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa"

interface AuthorProps {
  author: {
    name: string
    avatar: string
    bio: string
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export default function AuthorBio({ author }: AuthorProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold">{author.name}</h4>
        <p className="mt-1 text-muted-foreground">{author.bio}</p>
        
        {(author.twitter || author.linkedin || author.website) && (
          <div className="mt-3 flex gap-3">
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label={`${author.name}'s Twitter`}
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label={`${author.name}'s LinkedIn`}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            )}
            {author.website && (
              <a
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label={`${author.name}'s Website`}
              >
                <FaGlobe className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 