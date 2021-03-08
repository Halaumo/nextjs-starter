import styled from 'styled-components'
import Link from 'next/link'

const Flex = styled.div`
  display: flex;
  margin: -10px;

  & > a {
    margin: 10px;
  }
`

const Component = () => {
  return (
    <>
      <Flex>
        <Link href='/'>Home page</Link>
        <Link href='/page2'>Page 2</Link>
      </Flex>
    </>
  )
}

export default Component
