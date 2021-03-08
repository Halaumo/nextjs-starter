import type { AppProps } from 'next/app'
import '@/styles/normalize.css'
import { AnimatePresence , motion } from 'framer-motion'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const {header, ...otherprops} = pageProps

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <Component {...otherprops} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp

