import { useActiveSessionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

type useSectionInViewProps = {
  sectionName: SectionName;
  threshold?: number;
};

export const useSectionInView = ({ sectionName, threshold = 0.5 }: useSectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSessionContext();

  useEffect(() => {
    if (inView && Date.now() - 1000 > timeOfLastClick) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
};
