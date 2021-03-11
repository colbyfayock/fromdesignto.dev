import { Helmet } from 'react-helmet';
import { FaYoutube } from 'react-icons/fa';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import FeatureList from 'components/FeatureList';

export default function Home() {
  const { metadata } = useSite();
  const { siteName, homepage } = metadata;

  const metaDescription = 'Learn how to go from design to development using the best tools on the web!';

  const ogImage = `${homepage}/from-design-to-development-crash-course.jpg`;

  return (
    <Layout displayNav={false}>

      <Helmet>
        <html lang="en" />
        <title>{ siteName }</title>
        
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={metaDescription} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={homepage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:site" content={homepage} />
        <meta property="twitter:creator" content="@colbyfayock" />
      </Helmet>

      <Section>
        <Container>
          <h1 className={styles.homeTitle}>
            <span>
              From <strong>Design</strong> to
            </span>
            <span>
              <strong>Development</strong>
            </span>
            <span className={styles.homeTitleSubline}>
              <strong>Crash Course</strong>
            </span>
          </h1>

          <figure className={styles.homeVideo}>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/q9tpBtvTTz8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>

          <p className={styles.homeWatch}>
            <a href="https://www.youtube.com/colbyfayock">
              <FaYoutube className="icon-youtube icon-front" /> Watch on YouTube
            </a>
          </p>
        </Container>
      </Section>

      <FeatureList title="What You'll Learn" features={[
        '🎨 Designing layouts with Figma',
        '💻 Creating React apps with Next.js',
        '💅 Styling the web with Sass',
        '📓 Creating component systems with Storybook',
        '🧐 Automating Visual Testing with Applitools Eyes',
        '🤖 Automating code tasks with GitHub Actions',
        '⚙️ Deploying a Next.js app with Netlify',
        '🔒 Authenticating users with Netlify Identity',
        '📝 Manging dynamic content with Airtable'
      ]} backgroundColor="purple" />


      <Section className={styles.homeDetailsSection}>
        <Container>
          <h2>
            Full Chapter Breakdown
          </h2>
          
          <details className={styles.homeDetails}>
            <summary>What tools will we use?</summary>
            <ul>
              <li>Figma design tool</li>
              <li>Next.js React framework</li>
              <li>Sass CSS language</li>
              <li>Storybook design system and component framework</li>
              <li>Applitools automated visual testing</li>
              <li>GitHub Actions code task automation</li>
              <li>Netlify app hosting and deployment</li>
              <li>Netlify Identity authentication</li>
              <li>Airtable (API) as a database</li>
              </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>0:01:05 - Picking a new project with 50 Projects for React & the static Web</summary>
            <ul>
              <li>Downloading the free project idea PDF from 50reactprojects.com</li>
              <li>Reviewing available project ideas</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>0:01:40 - Creating a new design with Figma</summary>
            <ul>
              <li>Creating a new frame inside of a Figma project</li>
              <li>Adding text to a design</li>
              <li>Grouping content to easily update a layout</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>0:10:30 - Creating a new React app with Next.js and Create Next App</summary>
            <ul>
              <li>Starting a new app from scratch</li>
              <li>Reorganizing content structure</li>
              <li>Overview of a new Next.js app</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>0:15:43 - Installing and configuring Sass in Next.js</summary>
            <ul>
              <li>Adding Sass to a Next.js app</li>
              <li>Updating a Next.js app to use Sass</li>
              <li>Using Sass features like nesting and variables</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>0:18:37 - Create a project layout from a Figma design in Next.js </summary>
            <ul>
              <li>Using a Figma design to create a project layout</li>
              <li>Copying CSS styles from Figma into a Next.js app</li>
              <li>Making style changes in a Next.js app with style imports</li>
              <li>Adding and updating CSS inside of the browser developer tools</li>
              <li>Adding custom fonts with Google Fonts</li>
              <li>Creating and styling a custom form</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>0:38:17 - Adding Storybook to a Next.js app</summary>
            <ul>
              <li>Installing Storybook in a Next.js React project</li>
              <li>Configuring Sass with Storybook</li>
              <li>Creating new stories in Storybook</li>
              <li>Adding React components in Storybook</li>
              <li>Importing React components into Next.js</li>
              <li>Using custom Sass CSS modules to style components</li>
              <li>Importing global application styles into Storybook stories</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>0:56:00 - Developing and designing React components in Storybook</summary>
            <ul>
              <li>Creating Figma components to help develop new React components</li>
              <li>Using Iconset to import and use SVG icons with Figma</li>
              <li>Creating new React components from scratch from a Figma design</li>
              <li>Using CSS Flexbox for designing component layouts</li>
              <li>Using SVG Font Awesome icons with React Icons</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>1:36:52 - Deploying a Next.js project with Netlify</summary>
            <ul>
              <li>Creating a new GitHub repository</li>
              <li>Adding an existing project to GitHub</li>
              <li>Connecting a GitHub repo to Netlify</li>
              <li>Configuring build settings for a Netlify project</li>
              <li>Installing the Next.js build plugin to Netlify</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>1:42:52 - Automating Visual Testing with Applitools Eyes & GitHub Actions in Storybook</summary>
            <ul>
              <li>Getting started with Applitools</li>
              <li>Finding your Applitools API key</li>
              <li>Installing Applitools Eyes Storybook SDK</li>
              <li>Adding Visual Testing to Storybook with Applitools Eyes</li>
              <li>Testing breaking changes and visual regressions</li>
              <li>Visual differences and regressions in the Applitools dashboard</li>
              <li>Creating a new GitHub Action to automatically run tests</li>
              <li>Automating Applitools Eyes visual testing with GitHub Actions</li>
              <li>Setting Secrets in a GitHub repository</li>
              <li>Using a Secret as an environment variable in GitHub Actions</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>1:58:48 - Authentication with Netlify Identity and React Context</summary>
            <ul>
              <li>Installing Netlify Identity Widget</li>
              <li>Creating a useAuth custom hook with React Context</li>
              <li>Wrapping a Next.js application with React Context</li>
              <li>Using React Context to access state throughout an app</li>
              <li>Using the useEffect hook to initialize Netlify Identity on load</li>
              <li>Adding login functionality with Netlify Identity</li>
              <li>Setting up Netlify Identity with GitHub</li>
              <li>Only allowing logged in users to interact with app</li>
              <li>Letting users log out of the app</li>
              <li>Refreshing app authentication state on login</li>
              <li>Cleaning up event handlers on unmount with useEffect</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>2:27:16 - Adding dynamic content with the Airtable API</summary>
            <ul>
              <li>Getting started with Airtable</li>
              <li>Creating a new Base in Airtable to store content</li>
              <li>Reviewing the Airtable REST API</li>
              <li>Generating an API key in Airtable</li>
              <li>Using cURL to test fetching content from Airtable</li>
              <li>Using getStaticProps to fetch data in Next.js</li>
              <li>Authenticating requests to the Airtable API</li>
              <li>Dynamically showing content from Airtable</li>
              <li>Using JavaScript Intl.DateTimeFormat to format date strings</li>
              <li>Using environment variables to protect sensitive data</li>
              <li>Creating API endpoints for interacting with the Airtable API</li>
              <li>Creating new content with the Airtable API</li>
              <li>Using a form React component to submit new requests</li>
              <li>Sorting an array of objects by a  date key</li>
              <li>Protecting serverless functions with Netlify Identity</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>3:23:23 - Deploying the final app and serverless functions to Netlify</summary>
            <ul>
              <li>Adding environment variables to Netlify</li>
              <li>Debugging serverless function not being available in getStaticProps</li>
              <li>Deploying serverless function before using in app</li>
              <li>Testing our project on production</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>3:29:03 - Project recap</summary>
            <ul>
              <li>50reactprojects.com to get project ideas</li>
              <li>Creating a project design in Figma</li>
              <li>Using Create Next App to create a new Next.js React app</li>
              <li>Building a posts app</li>
              <li>Setting up Storybook to develop components</li>
              <li>Adding Applitools Eyes for automated Visual Testing</li>
              <li>Authenticating our app with Netlify Identity</li>
              <li>Using Airtable to fetch and create dynamic data</li>
              <li>Creating serverless functions for securing API requests</li>
              <li>Setting up environment variables to store sensitive data</li>
              <li>More things you can do</li>
            </ul>
          </details>

          <details className={styles.homeDetails}>
            <summary>3:33:43 - Congrats, you made it! Outro</summary>
            🥳🥳🥳🥳🥳
          </details>

        </Container>
      </Section>

    </Layout>
  )
}
