import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';


export default function Home() {
  return (
    <Layout
      title={`Introduction to DhiWise - DhiWise`}
      description="This is the place where you can find official information on how to use DhiWise effectively for your Web and Mobile App development. Dig into our documentation and quickstart guides. From syncing your Figma designs with DhiWise to how to use modified DhiWise code in your favourite IDEs, we’ve got you covered with everything.">
      <Head>
        <meta property="og:title" content='Introduction to DhiWise - DhiWise'/>
        <meta property="og:description" content='This is the place where you can find official information on how to use DhiWise effectively for your Web and Mobile App development. Dig into our documentation and quickstart guides. From syncing your Figma designs with DhiWise to how to use modified DhiWise code in your favourite IDEs, we’ve got you covered with everything.' />
        <meta property="og:image" content="https://uploads-ssl.webflow.com/618e36726d3c0f19c9284e56/63026091c32fa7ee81164bf2_A.jpg" />
      </Head>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
