import BounceTypingText from "./components/BounceTypingText";
import Section from "./components/Section";

export default function Home() {
  return (
    <main>
      <Section className="bg-brand-dark-blue text-brand-white flex md:relative">
        <BounceTypingText
          className={`
            text-[26px] text-right m-auto
            md:absolute md:bottom-[120px] md:right-[120px] md:text-[30px] md:m-0
            lg:bottom-[150px] lg:right-[200px] lg:text-[40px]
          `}
          tag="h1"
          content={["Pablo Ramirez", "Full Stack Developer"]}
        />
      </Section>
    </main>
  );
}
