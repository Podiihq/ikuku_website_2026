import { useState } from 'react'

const ProgressiveImage = ({ className = '', priority = false, src, ...props }) => {
  const [loadedSrc, setLoadedSrc] = useState(null)
  const isLoaded = loadedSrc === src

  return (
    <img
      {...props}
      className={`progressive-image ${isLoaded ? 'progressive-image--loaded' : 'progressive-image--loading'} ${className}`}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setLoadedSrc(src)}
      onLoad={() => setLoadedSrc(src)}
      src={src}
    />
  )
}

export default ProgressiveImage
