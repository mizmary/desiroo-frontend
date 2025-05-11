import { createContext, useContext, useState, ReactNode } from "react"

type SelectedListContextType = {
  selectedListId: string
  setSelectedListId: (id: string) => void
}

const SelectedListContext = createContext<SelectedListContextType | undefined>(undefined)

export const SelectedListProvider = ({ children }: { children: ReactNode }) => {
  const [selectedListId, setSelectedListId] = useState<string>("")

  return (
    <SelectedListContext.Provider value={{ selectedListId, setSelectedListId }}>
      {children}
    </SelectedListContext.Provider>
  )
}

export const useSelectedList = () => {
  const context = useContext(SelectedListContext)
  if (!context) throw new Error("useSelectedList must be used within a SelectedListProvider")
  return context
}
