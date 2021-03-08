import { GetStaticProps, NextPage,  } from 'next'

interface props {
  header:header
}

const Component: NextPage<props> = ({ header }) => {
  return (
    <>
      {
        header.items.map((item) => {
          const { description, locale } = item.fields
          return <div key={locale}>{description} - {locale}</div>
        })
      }
    </>
  )
}

export default Component


