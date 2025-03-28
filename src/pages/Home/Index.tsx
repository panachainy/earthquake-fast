import { useEffect, useState } from 'react'

export default function Home() {
  const [people, setPeople] = useState<
    Array<{ name: string; email: string; image: string }>
  >([])

  useEffect(() => {
    async function fetchRSS() {
      try {
        // FIXME: ติด cors origin.
        const response = await fetch(
          'https://earthquake.tmd.go.th/feed/rss_tmd.xml',
        )
        const text = await response.text()
        console.log(text)
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(text, 'text/xml')
        const items = xmlDoc.querySelectorAll('item')

        const parsedItems = Array.from(items).map((item) => ({
          name: item.querySelector('title')?.textContent || '',
          email: item.querySelector('description')?.textContent || '',
          image: item.querySelector('enclosure')?.getAttribute('url') || '',
        }))

        setPeople(parsedItems)
      } catch (error) {
        console.error('Error fetching RSS:', error)
      }
    }

    fetchRSS()
  }, [])

  return <div>2</div>
}
