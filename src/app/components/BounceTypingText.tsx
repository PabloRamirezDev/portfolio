"use client";

import { AnimationEventHandler, FC, useEffect, useState } from "react";

interface Props {
  tag: keyof JSX.IntrinsicElements;
  content: string[];
  className?: string;
}

const BounceTypingText: FC<Props> = (props) => {
  const { tag: Tag, content, className } = props;

  const [contentIndex, setContentIndex] = useState(0);

  const currentContent = content[contentIndex];

  const handleAnimationIteration: AnimationEventHandler = (e) => {
    if (e.animationName === "typing") {
      setContentIndex(
        content.length <= contentIndex + 1 ? 0 : contentIndex + 1
      );
    }
  };

  return (
    <Tag
      className={`animate-typing-bounce whitespace-nowrap overflow-hidden h-fit border-r-[4px] font-mono border-r-brand-white box-content ${className}`}
      style={
        {
          "--length": currentContent.length,
          "--width": currentContent.length + "ch",
        } as any
      }
      onAnimationIteration={handleAnimationIteration}
    >
      {currentContent}
    </Tag>
  );
};

export default BounceTypingText;
