export default function SSR(props) {
  return (
    <div className="container">
      <span>This is Server Side Rendering Page 2</span>
      <span>{props.message}</span>
      <img src="/static/test.png" />
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
