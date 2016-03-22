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
    const config = {
      url: 'http://github.com',
      title: 'GitHub custom title',
      description: 'Custom description text here',
      image: 'https://cdn.tinypng.com/images/panda-chewing.png'
    };

    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            appId={499643536889202}
            {...config}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round={true} />
          </FacebookShareButton>

          <FacebookShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </FacebookShareCount>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            {...config}
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
            {...config}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={32}
              round={true} />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            {...config}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round={true} />
          </LinkedinShareButton>

          <LinkedinShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </LinkedinShareCount>
        </div>

        <div className="Demo__some-network">
          <VkontakteShareButton
            {...config}
            className="Demo__some-network__share-button">
            <button>vk</button>
          </VkontakteShareButton>

          <VkontakteShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </VkontakteShareCount>
        </div>

        <div className="Demo__some-network">
          <VkontakteShareButton
            {...config}
            className="Demo__some-network__share-button">
            <button>vk</button>
          </VkontakteShareButton>

          <VkontakteShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </VkontakteShareCount>
        </div>

        <div className="Demo__some-network">
          <OdnoklassnikiShareButton
            {...config}
            className="Demo__some-network__share-button">
            <button>ok</button>
          </OdnoklassnikiShareButton>

          <OdnoklassnikiShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </OdnoklassnikiShareCount>
        </div>

        <div className="Demo__some-network">
          <OdnoklassnikiShareButton
            {...config}
            className="Demo__some-network__share-button">
            <button>ok</button>
          </OdnoklassnikiShareButton>

          <OdnoklassnikiShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </OdnoklassnikiShareCount>
        </div>

        <div className="Demo__some-network">
          <MyMailShareButton
            {...config}
            className="Demo__some-network__share-button">
            <button>my.mail.ru</button>
          </MyMailShareButton>

          <MyMailShareCount
            url={config.url}
            className="Demo__some-network__share-count">
            {count => count}
          </MyMailShareCount>
        </div>
      </div>
    );
  }
});

export default Demo;
