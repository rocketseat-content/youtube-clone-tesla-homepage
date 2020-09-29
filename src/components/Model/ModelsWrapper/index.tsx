import React, { useRef } from 'react'

import { Container } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  return <Container ref={wrapperRef}>{children}</Container>
}

export default ModelsWrapper
