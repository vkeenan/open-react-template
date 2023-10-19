import { FaLinkedin, FaTwitter, FaRss } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiSalesforce } from "react-icons/si";

export function Socials() {
  return (
    <div className="flex justify-center gap-4 pt-1 mr-2 text-gray-100 align-middle lg:justify-end">
      <span className="-mt-1">Follow Work Different With AI!</span>
      <a
        className="transition hover:opacity-75"
        href="https://www.linkedin.com/company/work-different-with-ai"
        target="_blank"
        rel="noreferrer"
      >
        <span className="w-6 h-6">
          <FaLinkedin />
        </span>
      </a>
      <a
        className="transition hover:opacity-75"
        href="https://twitter.com/workdiffwithai"
        target="_blank"
        rel="noreferrer"
      >
        <span className="w-6 h-6">
          <FaTwitter />
        </span>
      </a>
      <a
        className="transition hover:opacity-75"
        href="mailto:info@workdifferentwithai.com"
        target="_blank"
        rel="noreferrer"
      >
        <span className="w-6 h-6">
          <MdOutlineEmail />
        </span>
      </a>
      <a
        className="transition hover:opacity-75"
        href="https://trailblazer.me/id/vkeenan1"
        target="_blank"
        rel="noreferrer"
      >
        <span className="w-6 h-6">
          <SiSalesforce />
        </span>
      </a>
      <a
        className="transition hover:opacity-75"
        href="/feed.xml"
        target="_blank"
        rel="noreferrer"
      >
        <span className="w-6 h-6">
          <FaRss />
        </span>
      </a>
    </div>
  );
}
