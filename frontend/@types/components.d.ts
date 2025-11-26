interface Children {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

type SVGComponent = React.FC<React.SVGAttributes<SVGElement>>

type Params<T extends string> = {
  params: {
    [K in T]: string
  }
}

type SearchParams<T extends string> = {
  searchParams: {
    [K in T]: string | undefined
  }
}
