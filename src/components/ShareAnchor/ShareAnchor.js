import ClassName from 'models/classname';
import { createTweetAction, openTweet } from '../../lib/social';

import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';

import styles from './ShareAnchor.module.scss';

const twitterAction = createTweetAction({
  message: [
`🧑‍🚀 I'm taking the From Design to Development Crash Course

🙆‍♀️ This 3.5 hour course from @colbyfayock walks through awesome web tools from Figma and Storybook to Next.js on Netlify

💪 Ready to get started?

🚀 Jump in below!

https://fromdesignto.dev`
  ]
});

const ShareAnchor = ({ children, className, backgroundColor = 'blue' }) => {
  const shareAnchorClassName = new ClassName(styles.shareAnchor);

  shareAnchorClassName.addIf(className, className);

  /**
   * handleOnTwitterClick
   */

  function handleOnTwitterClick(e) {
    e.preventDefault();
    openTweet({
      message: twitterAction
    })
  }

  return (
    <Section className={shareAnchorClassName.toString()} backgroundColor={backgroundColor}>
      <Container className={styles.shareAnchorContainer}>
        { children || <h3>Love From Design to Dev?</h3> }
        <p className={styles.shareAnchorActions}>
          <Button onClick={handleOnTwitterClick}>Share on Twitter</Button>
        </p>
      </Container>
    </Section>
  )
}

export default ShareAnchor;