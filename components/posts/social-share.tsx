/**
 * SocialShare component
 *
 * Renders social share buttons for:
 * - Facebook
 * - Twitter
 * - LinkedIn
 * - WhatsApp
 * - Email
 *
 * Uses react-icons for the icon components.
 *
 * Props:
 * - url: Required. The link to share.
 * - title: Required. The content title.
 *
 * Usage:
 * <SocialShare
 *   url={post.link}
 *   title={post.title}
 * />
 */

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

interface SocialShareProps {
  url: string;
  title: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  // create the share URLs
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    url
  )}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent(
    title
  )}&body=Check out this link: ${encodeURIComponent(url)}`;

  return (
    <div className="z-10 flex flex-wrap items-center justify-around p-2 mt-2 shadow-md bg-cocoa_brown-200">
      <div className="flex items-center justify-center w-1/6">
        <a
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-900 transition duration-150 rounded-full hover:text-gray-100 hover:bg-cocoa_brown-800 bg-cocoa_brown-100"
        >
          <FaFacebookF size={16} />
        </a>
        <span className="hidden ml-1 text-xs md:inline-block">Facebook</span>
      </div>

      <div className="flex items-center justify-center w-1/6">
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-900 transition duration-150 rounded-full hover:text-gray-100 hover:bg-cocoa_brown-800 bg-cocoa_brown-100"
        >
          <FaTwitter size={16} />
        </a>
        <span className="hidden ml-1 text-xs md:inline-block">Twitter</span>
      </div>

      <div className="flex items-center justify-center w-1/6">
        <a
          href={linkedInShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-900 transition duration-150 rounded-full hover:text-gray-100 hover:bg-cocoa_brown-800 bg-cocoa_brown-100"
        >
          <FaLinkedinIn size={16} />
        </a>
        <span className="hidden ml-1 text-xs md:inline-block">LinkedIn</span>
      </div>

      <div className="flex items-center justify-center w-1/6">
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-900 transition duration-150 rounded-full hover:text-gray-100 hover:bg-cocoa_brown-800 bg-cocoa_brown-100"
        >
          <FaWhatsapp size={16} />
        </a>
        <span className="hidden ml-1 text-xs md:inline-block">WhatsApp</span>
      </div>

      <div className="flex items-center justify-center w-1/6">
        <a
          href={emailShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-900 transition duration-150 rounded-full hover:text-gray-100 hover:bg-cocoa_brown-800 bg-cocoa_brown-100"
        >
          <FaEnvelope size={16} />
        </a>
        <span className="hidden ml-1 text-xs md:inline-block">Email</span>
      </div>
    </div>
  );
};
