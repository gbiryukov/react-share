import React from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  VkontakteShareButton,
  OdnoklassnikiShareButton,
  MyMailShareButton
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  VkontakteShareCount,
  OdnoklassnikiShareCount,
  MyMailShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

const Demo = React.createClass({
  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round={true} />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </FacebookShareCount>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round={true} />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={32}
              round={true} />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round={true} />
          </LinkedinShareButton>

          <LinkedinShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </LinkedinShareCount>
        </div>

        <div className="Demo__some-network">
          <VkontakteShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <button>vk</button>
          </VkontakteShareButton>

          <VkontakteShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </VkontakteShareCount>
        </div>

        <div className="Demo__some-network">
          <OdnoklassnikiShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <button>ok</button>
          </OdnoklassnikiShareButton>

          <OdnoklassnikiShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </OdnoklassnikiShareCount>
        </div>

        <div className="Demo__some-network">
          <MyMailShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <button>my.mail.ru</button>
          </MyMailShareButton>

          <MyMailShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </MyMailShareCount>
        </div>
      </div>
    );
  }
});

export default Demo;
