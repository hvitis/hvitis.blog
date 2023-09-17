'use client'
import { useReadLocalStorage } from 'usehooks-ts'
import { isMobile } from 'react-device-detect'
import NotificationSimple from '@/components/NotificationSimple'
import Link from 'next/link'

export default function Hero() {
  const url = '/blog/new-version-of-pixel-mosaic-generator'
  const locale = useReadLocalStorage('locale')
  return (
    <>
      {isMobile && (
        <NotificationSimple msg={' For the best experience open this page on your macOS or PC.'} />
      )}
      <div className="hero-content mb-4">
        <div className="max-w-md">
          <div className="indicator">
            <Link
              href={url}
              className="indicator-item indicator-bottom badge badge-secondary lg:-right-5 lg:top-5 -top-5"
            >
              v. 2.0
            </Link>
            <h1 className="lg:text-5xl text-2xl font-bold lg:px-1">Mosaic Art Maker</h1>
          </div>
          <p className="py-6">
            {locale === 'pl'
              ? 'Zamień swoje klocki w nową mozaikę.'
              : 'Make your favourite LEGO mosaic even better.'}
          </p>
          <p>{}</p>
        </div>
      </div>
    </>
  )
}