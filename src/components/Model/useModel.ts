import React, { useCallback, useEffect } from 'react'

import ModelsContext from './ModelsContext'

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = React.useContext(
    ModelsContext
  )

  useEffect(() => () => unregisterModel(modelName), [
    modelName,
    unregisterModel
  ])

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName
  ])

  return {
    registerModel,
    getModel
  }
}
