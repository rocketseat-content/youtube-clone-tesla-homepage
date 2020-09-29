import React, { useCallback, useRef, useState } from 'react'

import { CarModel } from '../ModelsContext'

import { Container } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, { ...model }])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state =>
      state.filter(model => model.modelName !== modelName)
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return registeredModels.find(item => item.modelName === modelName) || null
    },
    [registeredModels]
  )

  return <Container ref={wrapperRef}>{children}</Container>
}

export default ModelsWrapper
