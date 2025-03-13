/**
 * Calculates the estimated reading time for a given text content
 * @param content The text content to calculate reading time for
 * @param wordsPerMinute The average reading speed in words per minute (default: 225)
 * @returns A formatted string representing the estimated reading time
 */
export function calculateReadingTime(content: string, wordsPerMinute = 225): string {
  try {
    if (!content) return '1 min read'
    
    // Count words in the content
    const wordCount = countWords(content)
    
    // Calculate reading time in minutes
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    
    // Format the reading time
    if (minutes === 1) {
      return '1 min read'
    } else if (minutes < 1) {
      return '< 1 min read'
    } else {
      return `${minutes} min read`
    }
  } catch (error) {
    console.error('Error calculating reading time:', error)
    return '5 min read' // Default fallback
  }
}

/**
 * Counts the number of words in a text
 * @param text The text to count words in
 * @returns The number of words
 */
export function countWords(text: string): number {
  try {
    if (!text) return 0
    
    // Remove HTML tags
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, '')
    
    // Split by whitespace and filter out empty strings
    const words = cleanText.split(/\s+/).filter(Boolean)
    
    return words.length
  } catch (error) {
    console.error('Error counting words:', error)
    return 0
  }
}

/**
 * Generates an excerpt from the content
 * @param content The content to generate an excerpt from
 * @param maxLength The maximum length of the excerpt (default: 160)
 * @returns The generated excerpt
 */
export function generateExcerpt(content: string, maxLength = 160): string {
  try {
    if (!content) return ''
    
    // Remove HTML tags
    const cleanText = content.replace(/<\/?[^>]+(>|$)/g, '')
    
    // Trim whitespace
    const trimmedText = cleanText.trim()
    
    // If the text is already shorter than the max length, return it
    if (trimmedText.length <= maxLength) {
      return trimmedText
    }
    
    // Find the last space within the max length
    const lastSpaceIndex = trimmedText.lastIndexOf(' ', maxLength)
    
    // If no space is found, just cut at maxLength
    const cutIndex = lastSpaceIndex > 0 ? lastSpaceIndex : maxLength
    
    // Return the excerpt with ellipsis
    return `${trimmedText.substring(0, cutIndex)}...`
  } catch (error) {
    console.error('Error generating excerpt:', error)
    return content ? content.substring(0, Math.min(content.length, maxLength)) + '...' : ''
  }
}

/**
 * Estimates the difficulty level of the content based on various factors
 * @param content The content to analyze
 * @returns An object with readability metrics
 */
export function analyzeReadability(content: string): {
  level: 'beginner' | 'intermediate' | 'advanced'
  score: number
  averageSentenceLength: number
  longWordPercentage: number
} {
  try {
    if (!content) {
      return {
        level: 'beginner',
        score: 0,
        averageSentenceLength: 0,
        longWordPercentage: 0
      }
    }
    
    // Remove HTML tags
    const cleanText = content.replace(/<\/?[^>]+(>|$)/g, '')
    
    // Split into sentences
    const sentences = cleanText.split(/[.!?]+/).filter(Boolean)
    const sentenceCount = sentences.length
    
    // Split into words
    const words = cleanText.split(/\s+/).filter(Boolean)
    const wordCount = words.length
    
    // Count long words (more than 6 characters)
    const longWords = words.filter(word => word.length > 6)
    const longWordCount = longWords.length
    
    // Calculate metrics
    const averageSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0
    const longWordPercentage = wordCount > 0 ? (longWordCount / wordCount) * 100 : 0
    
    // Calculate readability score (simplified)
    // Higher score means more difficult to read
    const score = (0.4 * averageSentenceLength) + (0.4 * longWordPercentage)
    
    // Determine level
    let level: 'beginner' | 'intermediate' | 'advanced'
    if (score < 15) {
      level = 'beginner'
    } else if (score < 25) {
      level = 'intermediate'
    } else {
      level = 'advanced'
    }
    
    return {
      level,
      score,
      averageSentenceLength,
      longWordPercentage
    }
  } catch (error) {
    console.error('Error analyzing readability:', error)
    return {
      level: 'intermediate', // Default fallback
      score: 20,
      averageSentenceLength: 15,
      longWordPercentage: 30
    }
  }
} 