import Link from 'next/link'

export default function SSR(props) {
  return (
    <div className="container">
      <span>This is Server Side Rendering Page</span>
      <span>{props.message}</span>
      <img src="/static/test.png" />

      <Link href='/ssr/page-2'>
        <a>Go to page2</a>
      </Link>
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      message: 'hello'
    }
  }
}
