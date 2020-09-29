import React, { useEffect, useRef } from 'react'

import useModel from '../useModel'

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef: ref
      })
    }
  }, [children, modelName, overlayNode, registerModel])

  return (
    <Container ref={ref} {...props}>
      {children}
    </Container>
  )
}

export default ModelSection
