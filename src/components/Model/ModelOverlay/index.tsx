import React from 'react'
import useWrapperScroll from '../useWrapperScroll'

import { Container } from './styles'

const ModelOverlay: React.FC = ({ children }) => {
  const { scrollY } = useWrapperScroll()

  return <Container>{children}</Container>
}

export default ModelOverlay
