import { GetStaticProps, NextPage } from 'next'
import Home from '@/layouts/home'

const Page: NextPage<{ msg: string }> = ({ msg }) => {
  return (
    <>
      <Home msg={msg}/>
    </>
  )
}

export default Page

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      msg: 'Hello world',
    }
  }
}
