import React from 'react'
import clsx from 'clsx'
import smallLogo from '@site/static/images/White-Mogogram.png'
import flutter from '@site/static/images/tech/flutter.png'
import react from '@site/static/images/tech/react.png'
import android from '@site/static/images/tech/android.png'
import ios from '@site/static/images/tech/ios.png'
import node from '@site/static/images/tech/node.png'
import laravel from '@site/static/images/tech/laravel.png'
import learningImg from '@site/static/images/learning-image.png'
import styles from './styles.module.css'
import Resources from './Resources'
import Tutories from './Tutories'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    )
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customise your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    )
  }
]

function Feature ({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      {/* <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> */}
      <div className={styles.homeHeroSection}>
        <div className='container'>
          <div className={styles.homeHeroContent}>
            <img src={smallLogo} alt='' />
            <h1 className={`${styles.dhi_h1} text--center`}>
            DhiWise User Documentation
            </h1>
            <div className={styles.heroDesc}>
              <p className={styles.body_2}>
              This is the place where you can find official information on how to use DhiWise effectively for your Web and Mobile App development. Dig into our documentation and quickstart guides. From syncing your Figma designs with DhiWise to how to use modified DhiWise code in your favourite IDEs, we’ve got you covered with everything. 
              </p>
            </div>
            <div className={`${styles.flex} ${styles.justifyCenter}`}>
              <a href='https://app.dhiwise.com/sign-up' target="_blank" className={styles.primaryButton}>Get started now</a>
            </div>
          </div>
          <div className={styles.heroBlock}>
            <div className={styles.heroCardBlock}>
              <h2 className={styles.dhi_h2}>Understand DhiWise </h2>
              <p className={styles.body_2}>
                DhiWise is a programming platform where you can convert your designs into developer-friendly code for Mobile and web apps. DhiWise automates the application development lifecycle and instantly generates readable, modular and reusable code for React and Flutter Apps at blazing fast speed without comprising on code-quality and developer-experience.
              </p>
            </div>
            <div className={`${styles.heroCardBlock} ${styles.heroCardSecond}`}>
              <h2 className={styles.dhi_h2}>Getting Started </h2>
              <p className={styles.body_2}>
              Visit app.dhiwise.com to get started with building the next big thing in the browser itself.  You can also use our Figma plugin if you’re working on Figma.
              </p>
              <div className={styles.techWrapper}>
                <div className={styles.techBase}>
                  <img src={flutter} alt='' />
                </div>
                <div className={styles.techBase}>
                  <img src={react} alt='' />
                </div>
                <div className={styles.techBase}>
                  <img src={android} alt='' />
                </div>
                <div className={styles.techBase}>
                  <img src={ios} alt='' />
                </div>
                <div className={styles.techBase}>
                  <img src={node} alt='' />
                </div>
                <div className={styles.techBase}>
                  <img src={laravel} alt='' />
                </div>
              </div>
            </div>
            <div className={`${styles.heroCardBlock} ${styles.heroCardThird}`}>
              <h2 className={`${styles.dhi_h2} text--center`}>
                Explore How it Works
              </h2>
              <p className={`${styles.body_2} text--center`}>
              Dive into our step-by-step tutorials and see how our team has used DhiWise
              </p>
              {/* <div className={styles.heroLink}>
                <a className={styles.link}>Watch webinar</a>
              </div> */}
              <div className={styles.webinarImg}>
                <img src={learningImg} />
              </div>
            </div>
          </div>
          {/* resources */}
          <Resources />
          <Tutories/>
        </div>
      </div>
    </section>
  )
}
