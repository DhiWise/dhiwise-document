import React from 'react'
import clsx from 'clsx'
import tutoriesImg from '@site/static/images/tutories.png'
import playImg from '@site/static/images/play.png'
import linkdin from '@site/static/images/social/linkedin.png'
import twitter from '@site/static/images/social/twitter.png'
import insta from '@site/static/images/social/instagram.png'
import styles from './styles.module.css'
export default function Tutories () {
  return (
    <div className={styles.tutoriesCard}>
      <div className={styles.tutoriesCardLeft}>
        <h2 className={styles.dhi_h2}>DhiWise University </h2>
        <p className={styles.body_2}>Not an avid reader? Fret not, as we also have an intensive knowledge base in the form of video tutorials. Head to DhiWise University to find a library of lessons covering everything from designing a Figma to deploying an application.  With more than 15 courses, you can learn to build anything ranging from a basic to an advanced application.</p>
        <div className={styles.tutoriesCradSmall}>
          <div className={styles.tutoriesSmallSection}>
            <div className={styles.tutoriesCradSmallImg}>
              <img src={playImg} alt=""/>
            </div>
            <div className={styles.socialCardContent}>
              <div className={styles.socialCardTitle}>App Creation Flutter</div>
              <p>Coming soon!</p>
            </div>
          </div>
          <div className={styles.tutoriesSmallSection}>
            <div className={`${styles.tutoriesCradSmallImg}`}>
              <img src={playImg} alt=""/>
            </div>
            <div className={styles.socialCardContent}>
              <div className={styles.socialCardTitle}>App Creation React</div>
              <p>Coming soon!</p>
            </div>
          </div>
          <div className={styles.tutoriesSmallSection}>
            <div className={`${styles.tutoriesCradSmallImg}`}>
              <img src={playImg} alt=""/>
            </div>
            <div className={styles.socialCardContent}>
              <div className={styles.socialCardTitle}>Smart Editor Basic</div>
              <p>Coming soon!</p>
            </div>
          </div>
          <div className={styles.tutoriesSmallSection}>
            <div className={`${styles.tutoriesCradSmallImg}`}>
              <img src={playImg} alt=""/>
            </div>
            <div className={styles.socialCardContent}>
              <div className={styles.socialCardTitle}>Figma Fundamentals</div>
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tutoriesImgBlock}>
        <img src={tutoriesImg} alt="" />
      </div>
    </div>
  )
}
