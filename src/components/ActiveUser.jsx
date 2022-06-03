import React, { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext"
import styles from '../styles/ActiveUsers.module.css'
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Image
} from '@chakra-ui/react'

const ActiveUser = () => {
  const { isDark } = useContext(ThemeContext)
  return (
    <div className={`${styles.container} ${isDark ? styles.dark:styles.light}`}>
      <div className={styles.title}>
        <h1>Active Users</h1>
        <p>for Augest 2019</p>
      </div>
      <div>
        <div className={styles.innerBox}>
          <div className={styles.imgName}>
            <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
              />
              <div className={styles.nameBox}>
                <h2 >Nrupul Dev</h2>
                <h3>Copenhagan, Denmark</h3>
              </div>
          </div>
          <FiMoreHorizontal />
        </div>
        <Slider aria-label='slider-ex-1' 
                defaultValue={70} 
                colorScheme='green'
                >
          <SliderTrack >
            <SliderFilledTrack />
          </SliderTrack>
          {/* <SliderThumb /> */}
        </Slider>
        <div className={styles.points}>
          <p>Professional Level 15</p>
          <h4>4723 Points</h4>
        </div>



        <div className={styles.innerBox}>
          <div className={styles.imgName}>
            <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
              />
              <div className={styles.nameBox}>
                <h2 >Sandhya</h2>
                <h3>Copenhagan, Denmark</h3>
              </div>
          </div>
          <FiMoreHorizontal />
        </div>
        <Slider aria-label='slider-ex-1' 
                defaultValue={50} 
                colorScheme='blue'
                >
          <SliderTrack >
            <SliderFilledTrack />
          </SliderTrack>
          {/* <SliderThumb /> */}
        </Slider>
        <div className={styles.points}>
          <p>Professional Level 11</p>
          <h4>2339 Points</h4>
        </div>



        <div className={styles.innerBox}>
          <div className={styles.imgName}>
            <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
              />
              <div className={styles.nameBox}>
                <h2 >Elon Tusk</h2>
                <h3>California, USA</h3>
              </div>
          </div>
          <FiMoreHorizontal />
        </div>
        <Slider aria-label='slider-ex-1' 
                defaultValue={30} 
                colorScheme='purple'
                >
          <SliderTrack >
            <SliderFilledTrack />
          </SliderTrack>
          {/* <SliderThumb /> */}
        </Slider>
        <div className={styles.points}>
          <p>Professional Level 6</p>
          <h4>1884 Points</h4>
        </div>
      </div>
      
    </div>
  )
}

export default ActiveUser