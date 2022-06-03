import React, { useContext } from 'react'
import { Switch } from "@chakra-ui/react"
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const {isDark , light , dark } = useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${isDark ? styles.dark:styles.light}`}>
        <h1>My Dashboard</h1>
        <h2>Dark Mode</h2>
        <Switch size='lg' onChange={isDark? light:dark}/>
    </div>
  )
}

export default Navbar