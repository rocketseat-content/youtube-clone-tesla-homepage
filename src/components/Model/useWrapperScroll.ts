import { useMotionValue } from 'framer-motion'

export default function useWrapperScroll() {
  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)

  return { scrollY, scrollYProgress }
}
