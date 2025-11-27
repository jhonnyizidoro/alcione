import { FC, SVGAttributes } from 'react'

const SearchIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 28.138 28.138'
    {...props}
  >
    <path
      d='M13.942,6.126a7.816,7.816,0,1,0,7.816,7.816A7.816,7.816,0,0,0,13.942,6.126ZM3,13.942A10.942,10.942,0,1,1,22.706,20.5l7.974,7.974a1.563,1.563,0,0,1-2.211,2.211L20.5,22.706A10.943,10.943,0,0,1,3,13.942Z'
      transform='translate(-3 -3)'
    />
  </svg>
)

export default SearchIcon
