import Page2 from '@/layouts/page2'
import { GetStaticProps, NextPage } from 'next'

const Page: NextPage<{ msg: string }> = ({ msg }) => {
  return (
    <>
      <Page2 msg={msg}/>
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

