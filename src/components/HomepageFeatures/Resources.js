import React from 'react'
import clsx from 'clsx'
import firebase from '@site/static/images/firebase.png'
import figmaImg from '@site/static/images/resource/figma.png'
import smartEditorImg from "@site/static/images/resource/smart-editor.png"
import APIImg from "@site/static/images/resource/API.png" 
import navigationImg from "@site/static/images/resource/navigation.png" 
import templateImg from "@site/static/images/resource/Template.png"  
import codeSyncImg from "@site/static/images/resource/code-sync.png"  
import CodeStructureImg from "@site/static/images/resource/code.png" 
import autoIdentify from "@site/static/images/resource/algorithm.png" 
import linkArrowImg from "@site/static/images/link-arrow.png" 
import styles from './styles.module.css'
export default function Resources () {
  return (
    <div className={styles.resourcesBlock}>
      <div className=''>
        <h2 className={`${styles.dhi_h1} text--center`}>
        Learn about DhiWise 
        </h2>
        <p className={`${styles.desc} text--center`}>
        We’ve curated some topics that you’d quickly jump into to know more about how we do what we do!
        </p>
      </div>
      <div className={styles.resourcesCardWrapper}>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={figmaImg} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Figma Sync</h4>
            <p className={styles.body_3}>
            Import application design from Figma, Adobe XD, or Sketch. Use Figma plugin or integrate your account with DhiWise and import designs with much ease.
            </p>
            <a href="/docs/flutter/intro#create-a-new-app" target="_blank" className={styles.linkTag}>Learn more
              <img src={linkArrowImg} alt=""/>
            </a>
          </div>
        </div>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={autoIdentify} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Auto Identification</h4>
            <p className={styles.body_3}>
              DhiWise auto-identifies all your designs and converts them into code. Even it also auto-detects actions and set them up priorly so you can easily build your beautiful apps in no time.
            </p>
            <a href="https://www.dhiwise.com/post/auto-identification-figma-refresh" target="_blank" className={styles.linkTag}>Learn more
              <img src={linkArrowImg} alt=""/>
            </a>
          </div>
        </div>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={smartEditorImg} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Smart Editor </h4>
            <p className={styles.body_3}>
            Smart Editor cover all the developer's ergonomics right here! It provides the right and easy-to-get hands-on amount of creative space to a developer to build the app they desire.
            </p>
            <a className={styles.linkTag} href='/docs/smarteditor/intro'>Learn more
              <img src={linkArrowImg} alt=""/>
            </a>
          </div>
        </div>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={APIImg} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Data Binding</h4>
            <p className={styles.body_3}>
            Let your app communicate by integrating real-time data sources in it using APIs, and backend services like Firebase and Supabase.
            </p>
            <a className={styles.linkTag} href='/docs/flutter/api-integration'>Learn more
              <img src={linkArrowImg} alt=""/>
            </a>
          </div>
        </div>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={navigationImg} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Navigation and Permissions</h4>
            <p className={styles.body_3}>
            Smoothly transit forward and backwards in your app easily by setting up navigation actions in your design. Setup run-time permissions to access user permission in your apps.
            </p>
            <a className={styles.linkTag} href='/docs/flutter/navigation'>Learn more
              <img src={linkArrowImg} alt=""/>
            </a>
          </div>
        </div>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={templateImg} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Prebuilt Templates and Screens</h4>
            <p className={styles.body_3}>
            DhiWise offers a vast collection of Templates. Pick a single or multiple pre-built screens of your choice, from a wide range of 1000+ screens available with different categories.
            </p>
            <a className={styles.linkTag} href='/docs/flutter/intro#create-from-template'>Learn more
              <img src={linkArrowImg} alt="image"/>
            </a>
          </div>
        </div>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={codeSyncImg} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Code Sync</h4>
            <p className={styles.body_3}>
            Get your complete code as you are done with your application building, easily share the preview with others, get it to your IDE or sync it with your Git repositories so easily.
            </p>
            <a className={styles.linkTag} href='/docs/flutter/deploy-or-download-code#sync-application-code-to-github'>Learn more
              <img src={linkArrowImg} alt=""/>
            </a>
          </div>
        </div>
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardImg}>
            <img src={CodeStructureImg} alt='' />
          </div>
          <div>
            <h4 className={styles.dhi_h4}>Code Structure </h4>
            <p className={styles.body_3}>
              Get code with proper code standards followed and formatting done, with managed hierarchy for the application's files and folders.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
