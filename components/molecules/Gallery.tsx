import Image from 'next/image'

import { useEffect, useRef } from 'react'

import {
  Options,
  Splide,
  SplideSlide,
  SplideTrack
} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface IProps {
  images: string[]
}

const Gallery = ({ images }: IProps) => {
  const mainRef = useRef<Splide>(null)
  const thumbsRef = useRef<Splide>(null)

  const mainOptions: Options = {
    type: 'loop',
    rewind: true,
    autoplay: true,
    interval: 5000,
    perPage: 1,
    gap: '1rem'
  }

  const thumbsOptions: Options = {
    type: 'slide',
    rewind: true,
    gap: '0.5rem',
    pagination: false,
    fixedWidth: 48,
    fixedHeight: 48,
    arrows: false,
    cover: true,
    focus: 'center',
    isNavigation: true
  }

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide)
      mainRef.current.sync(thumbsRef.current.splide)
  }, [])

  return (
    <div>
      <Splide options={mainOptions} ref={mainRef} hasTrack={false}>
        <SplideTrack className='pb-6'>
          {images.map((url, index) => (
            <SplideSlide
              key={url}
              className='flex justify-center items-center p-2'
            >
              <Image
                className='h-80 object-cover rounded-3xl'
                src={url}
                alt={`images-${index + 1}`}
                width={500}
                height={384}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>

      <Splide
        className='splide_thumbnails'
        options={thumbsOptions}
        ref={thumbsRef}
      >
        {images.map((url, index) => (
          <SplideSlide key={url}>
            <Image
              src={url}
              alt={`images-${index + 1}`}
              width={128}
              height={128}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Gallery
