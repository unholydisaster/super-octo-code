import React from 'react';
import { Linkdiv, LinkedInlogo, Facebooklogo, Redditlogo, Twitterlogo, Whatsapplogo, Telegramlogo } from "../styles/ShareLinks.js"

const ShareButton = ({ noteTitle, noteImage }) => {
  const pageUrl = `https://rahacode.com/${noteTitle}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const Psp = {
    url: encodedUrl,
    title: noteTitle,
    image: noteImage
  }

 
  
  const { title, url, image } = Psp

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${title}: ${url}`);
    const imageEncoded = encodeURIComponent(image);
    const whatsappLink = `whatsapp://send?text=${text}%0a%0a${imageEncoded}`;
    window.open(whatsappLink);
  };
  

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`${title}: ${url}`);
    const twitterLink = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(image)}`;
    window.open(twitterLink);
  };

  
  const shareOnTelegram = () => {
    const text = encodeURIComponent(`${title}: ${url}`);
    const photo = encodeURIComponent(image);
    const telegramUrl = `https://t.me/share/url?url=${url}&text=${text}&photo=${photo}`;
    window.open(telegramUrl, '_blank');
  }
  

  const shareOnLinkedIn = () => {
    const text = encodeURIComponent(`${title}: ${url}`);
    const media = encodeURIComponent(image);
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${text}&media=${media}`;
    window.open(linkedinUrl, '_blank');
  }

  const shareOnReddit = () => {
    const text = encodeURIComponent(`${title}: ${url}`);
    const media = encodeURIComponent(image);
    const redditUrl = `https://www.reddit.com/submit?url=${text}&media=${media}&title=${title}`;
    window.open(redditUrl, '_blank');
  }

  const shareOnFacebook = () => {
    const text = encodeURIComponent(`${title}: ${url}`);
    const picture = encodeURIComponent(image);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${text}&picture=${picture}`;
    window.open(facebookUrl, '_blank');
  }

  return (
    <>
      <Linkdiv>
        <Whatsapplogo onClick={shareOnWhatsApp} />
        <Twitterlogo onClick={shareOnTwitter} />
        <Telegramlogo onClick={shareOnTelegram} />
        <LinkedInlogo onClick={shareOnLinkedIn} />
        <Redditlogo onClick={shareOnReddit} />
        <Facebooklogo onClick={shareOnFacebook} />
      </Linkdiv>
    </>
  );
}

export default ShareButton;
