import { Image, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import styles from "../styles/Sidebar.module.css";
import { FiBarChart, FiAirplay, FiTrash, 
        FiFileText, FiSettings, FiPlusCircle } from "react-icons/fi"
import { ThemeContext } from '../contexts/ThemeContext';

const Sidebar = () => {
    const { isDark } = useContext(ThemeContext)
  return (
    <div className={`${styles.container} ${isDark? styles.dark:styles.light}`}>
        <Image
            borderRadius='full'
            boxSize='50px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
        />
        <Flex
            flexDirection='column'
            gap='30px'
            alignItems='center'
        >
            <FiBarChart fontSize='30px'/>
            <FiAirplay fontSize='30px'/>
            <FiTrash fontSize='30px'/>
            <FiFileText fontSize='30px'/>
            <FiSettings fontSize='30px'/>
        </Flex>
        <FiPlusCircle fontSize='30px'/>
    </div>
  )
}

export default Sidebar