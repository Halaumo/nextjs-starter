import Header from '@/components/header'
import { NextPage } from 'next'

interface props {
  msg: string
}

const Component: NextPage<props> = ({ msg }) => {
  return (
    <>
      <Header />
      <h1>{msg}</h1>
    </>
  )
}

export default Component
