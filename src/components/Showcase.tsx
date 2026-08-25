import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  });

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                {" "}
                Introducing{" "}
                <span className="text-white">
                  M4, The next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                The M4 chip is designed to deliver fast and efficient
                performance. Its powerful CPU and GPU handle demanding tasks
                smoothly, from everyday work to professional apps, creative
                projects, and gaming.
              </p>
              <p>
                With Apple Intelligence, M4 provides fast on-device processing
                for supported features. Your MacBook Pro handles intelligent
                tasks smoothly while keeping performance efficient and
                responsive.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up To</p>
              <h3>4x faster</h3>
              <p>pro rerendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up To</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
