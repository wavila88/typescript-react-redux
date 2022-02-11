import { useContext } from "react"
import { ThemeContext } from "./ThemeContext" 

export const BoxComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>
      
    </div>
  )
}