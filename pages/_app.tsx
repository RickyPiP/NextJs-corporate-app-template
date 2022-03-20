import { AppProps } from 'next/app'
import Header from '../components/header'
import GlobalStyles from './../styles/GlobalStyles'
import { useState } from 'react'
import usePopups from '../hooks/usePopups'
import { AuthContext } from '../context/auth-context'
import Footer from '../components/footer'
import './app.styles.css'

const App = ({ Component, pageProps }: AppProps) => {
  const [isDropdownOpen, toggleDropdown, setClose] = usePopups()
  const [isModalOpen, setIsModalOpen, closeModal] = usePopups()
  const [auth, setAuth] = useState<any>('')
  const [rememberMe, setRememberMe] = useState<any>(false)
  const value: any = {
    auth,
    setAuth,
    setIsModalOpen,
    isDropdownOpen,
    toggleDropdown,
    setClose,
    isModalOpen,
    closeModal,
    rememberMe,
    setRememberMe,
  }
  return (
    <div>
      <GlobalStyles />
      <AuthContext.Provider value={value}>
        {' '}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthContext.Provider>
    </div>
  )
}

export default App
