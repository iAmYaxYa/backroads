import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks?.map((socialLink) => {
        return (
          <SocialLink
            key={socialLink.id}
            socialLink={socialLink}
            myClass={childClass}
          />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
