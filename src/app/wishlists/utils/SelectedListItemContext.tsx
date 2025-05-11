import { createContext, useContext, useState, ReactNode } from "react"

type SelectedListContextType = {
  selectedListItemId: string
  setSelectedListItemId: (id: string) => void
}

const SelectedListItemContext = createContext<SelectedListContextType | undefined>(undefined)

export const SelectedListItemProvider = ({ children }: { children: ReactNode }) => {
  const [selectedListItemId, setSelectedListItemId] = useState<string>("")

  return (
    <SelectedListItemContext.Provider value={{ selectedListItemId, setSelectedListItemId }}>
      {children}
    </SelectedListItemContext.Provider>
  )
}

export const useSelectedListItem = () => {
  const context = useContext(SelectedListItemContext)
  if (!context)
    throw new Error("useSelectedListItem must be used within a SelectedListItemProvider")
  return context
}
