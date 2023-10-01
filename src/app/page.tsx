"use client";

import Link from "next/link";
import AppearingSection from "./components/AppearingSection";
import BounceTypingText from "./components/BounceTypingText";
import Section from "./components/Section";
import TimedHint from "./components/TimedHint";
import ArrowDown from "./icons/ArrowDown";
import theme from "./lib/theme";
import { useRef } from "react";
import NavLink from "./components/NavLink";

export default function Home() {
  const ref = useRef<HTMLElement>(null);

  return (
    <main>
      <Section
        ref={ref}
        id="pr"
        className="bg-brand-dark-blue text-brand-white flex md:relative"
      >
        <BounceTypingText
          className={`
            text-[26px] text-right m-auto
            md:absolute md:bottom-[120px] md:right-[120px] md:text-[30px] md:m-0
            lg:bottom-[150px] lg:right-[200px] lg:text-[40px]
          `}
          tag="h1"
          content={["Pablo Ramirez", "Full Stack Developer"]}
        />
        <div
          className={`
            m-auto
            md:absolute md-bottom-[120px] md:left-[120px] md:m-0
            lg:bottom-[150px] lg:left-[200px]
            `}
        >
          <TimedHint timeToHint={7500}>
            <ArrowDown
              className={`animate-bounce hover:cursor-pointer`}
              fill={theme?.colors?.["brand-white"] as string}
              height={"50px"}
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            />
          </TimedHint>
        </div>
      </Section>
      <AppearingSection
        id="projects"
        className="bg-brand-orange"
      ></AppearingSection>
      <AppearingSection
        id="certifications"
        className="bg-brand-purple"
      ></AppearingSection>
      <AppearingSection
        id="skills"
        className="bg-brand-blue"
      ></AppearingSection>
      <AppearingSection
        id="contact"
        className="bg-brand-dark-orange"
      ></AppearingSection>
      <nav className="fixed w-full top-0">
        <TimedHint
          timeToHint={9000}
          activeClass="translate-0 opacity-100"
          inactiveClass="-translate-y-5 opacity-0"
          showOnScroll={true}
        >
          <ul className="flex w-full justify-evenly mt-6 text-brand-white">
            <NavLink
              href="#pr"
              onClick={(e) => {
                e.preventDefault();
                ref.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              PR
            </NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </ul>
        </TimedHint>
      </nav>
    </main>
  );
}
