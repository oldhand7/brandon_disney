import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/about/terms">How it Works? </FooterLink>

              <FooterLink to="/about/terms">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/about/terms">How it Works? </FooterLink>

              <FooterLink to="/about/terms">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/about/terms">How it Works? </FooterLink>

              <FooterLink to="/about/terms">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/about/terms">How it Works? </FooterLink>

              <FooterLink to="/about/terms">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Join VarietySplash
            </SocialLogo>
            <WebsiteRights>
              Curtis Wilmoth &copy; {new Date().getFullYear()} All Rights
              Reserved
              <FooterLink to="/about/terms"> | Terms of Service</FooterLink>
            </WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink
                href="https://github.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
