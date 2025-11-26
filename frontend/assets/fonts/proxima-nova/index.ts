import localFont from 'next/font/local'

const proximaNova = localFont({
  variable: '--font-proxima-nova',
  src: [
    {
      path: './ProximaNova-Regular.ttf',
      weight: '400',
    },
    {
      path: './ProximaNova-Semibold.ttf',
      weight: '500',
    },
    {
      path: './ProximaNova-Extrabold.ttf',
      weight: '700',
    },
  ],
})

export default proximaNova
