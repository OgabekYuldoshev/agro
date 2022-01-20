// ** React Imports
import { useEffect, useState } from 'react'
import NavBar from "./components/main-navbar"

const BlankLayout = ({ children }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)
  // ** Hook

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <NavBar />
      <div className='app-content content'>
        <div className='content-wrapper'>
          <div className='content-body px-5'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default BlankLayout
