/**
 * Calculate reading time for a given text
 * @param {string} text - The text content
 * @returns {number} - Reading time in minutes
 */
export function getReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}
