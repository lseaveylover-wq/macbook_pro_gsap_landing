import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { performanceImages, performanceImgPositions } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.fromTo(
      ".content p",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".content p",
          start: "top bottom",
          end: "top center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((pos) => {
        if (pos.id === "p5") return;

        const target = `.${pos.id}`;
        const animProps: any = {
          bottom: `${pos.bottom}%`,
        };
        
        if (pos.left !== undefined) animProps.left = `${pos.left}%`;
        if (pos.right !== undefined) animProps.right = `${pos.right}%`;
        if ('transform' in pos) animProps.transform = (pos as any).transform;

        tl.to(target, animProps, 0);
      });
    }
  }, { scope: sectionRef, dependencies: [isMobile] });

  return (
    <section ref={sectionRef} id="performance">
      <h2>Next Level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} alt={id} className={id} />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keep up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that render
          images faster, so{" "}
          <span className="text-white">
            {" "}
            gaming feels more immersive and realistic than ever.
          </span>
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utillizations - driving a huge performance boost
          for the most demanding pro apps & games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
