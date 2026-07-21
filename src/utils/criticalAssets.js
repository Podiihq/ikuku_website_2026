export const HOME_CRITICAL_IMAGE_SELECTOR = 'img[data-home-critical]'

export const waitForImage = (image) => {
  const decodeImage = () => image.decode?.().catch(() => undefined) ?? Promise.resolve()

  if (image.complete) {
    return decodeImage()
  }

  return new Promise((resolve) => {
    const handleLoad = () => {
      decodeImage().finally(resolve)
    }

    image.addEventListener('load', handleLoad, { once: true })
    image.addEventListener('error', resolve, { once: true })
  })
}

export const getHomeCriticalImageTasks = () =>
  Array.from(document.querySelectorAll(HOME_CRITICAL_IMAGE_SELECTOR)).map(waitForImage)

export const getCriticalFontTasks = () => {
  if (!document.fonts) return []

  return [
    document.fonts.load('400 1em "DM Sans"'),
    document.fonts.load('700 1em "DM Sans"'),
    document.fonts.load('400 1em "SmoothBerry"'),
  ]
}
