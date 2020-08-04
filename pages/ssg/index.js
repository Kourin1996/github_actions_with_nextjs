import Link from 'next/link'

export default function SSG(props) {
  return (
    <div className="container">
      <span>This is Static Page</span>
      <Link href='/ssg/page-2'>
        <a>Go to page2</a>
      </Link>
      <img src="/public/test.png" />
    </div>
  )
}
