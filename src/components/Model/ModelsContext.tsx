import React, { ReactNode } from 'react'

export interface CarModel {
  modelName: string
  overlayNode: ReactNode
  sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>
  registeredModels: CarModel[]
  registerModel: (model: CarModel) => void
  unregisterModel: (modelName: string) => void
  getModelByName: (modelName: string) => CarModel | null
}

// Export with default values
export default React.createContext<ModelsContext>({} as ModelsContext)
