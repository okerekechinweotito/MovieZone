import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import getIcon from "util/getIcon";
import logoDir from "assets/img/moviedb-logo.svg";
import {
  Footer,
  FooterContainer,
  DBLogo,
  LogoLink,
  SocialIcon,
  SocialLink,
  Note,
} from "./styles";

export default function FooterComp() {
  const { pathname } = useLocation();
  const [isDisplayed, setIsDisplayed] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (pathname.includes("login")) {
      setIsDisplayed(false);
    } else {
      setIsDisplayed(true);
    }
  }, [pathname]);

  return (
    <Footer isDisplayed={isDisplayed}>
      <FooterContainer
        ref={ref}
        initial={"hidden"}
        animate={controls}
        variants={variants}
      >
        <LogoLink
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
        >
          <DBLogo src={logoDir} alt="Movie DB Logo" />
        </LogoLink>

        <Note>
          Made by
          <LogoLink
            href="https://www.okereke.dev"
            target="_blank"
            rel="noreferrer"
          >
            Okereke Chinweotito
          </LogoLink>
        </Note>

        <div>
          <SocialLink
            href="https://twitter.com/okereke__"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <use href={getIcon("twitter")} />
            </SocialIcon>
          </SocialLink>
          <SocialLink
            href="https://github.com/okerekechinweotito"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <use href={getIcon("github")} />
            </SocialIcon>
          </SocialLink>
        </div>
      </FooterContainer>
    </Footer>
  );
}
