type header =  {
  items: locale[]
}

type locale = {
  fields: {
    description: string
    locale: string
  }
}
interface props {
  header: header
}
