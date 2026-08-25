import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Display = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#display-section",
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      },
    });

    tl.to("#laptop-container", {
      scale: 1,
      duration: 2,
      ease: "power2.inOut",
    })
      .to(
        "#screen-image",
        {
          scale: 1.5,
          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      )
      .to("#display-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
      });
  });

  return (
    <>
      {/* LAPTOP ANIMATION SECTION */}
      <section
        id="display-section"
        className="relative h-screen bg-black overflow-hidden flex justify-center items-center"
      >
        <div
          id="laptop-container"
          className="relative flex flex-col justify-center items-center w-full scale-[4]"
        >
          {/* LAPTOP AND SCREEN MASK */}
          <div className="relative w-full max-w-5xl flex justify-center flex-shrink-0">
            <div
              className="absolute z-10 overflow-hidden rounded-[8px] md:rounded-[12px] lg:rounded-[16px]"
              style={{
                width: "81.5%",
                height: "90%",
                top: "1%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                id="screen-image"
                src="/screen.png"
                alt="Screen Content"
                className="w-full h-full object-cover"
              />
            </div>

            <img
              src="/MacBook.png"
              alt="MacBook Frame"
              className="relative z-20 w-full pointer-events-none"
            />

            {/* TEXT ON THE SCREEN ITSELF */}
            <div
              id="display-text"
              className="absolute inset-0 z-40 flex flex-col items-center pt-[18%] text-white opacity-0 translate-y-10 pointer-events-none"
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg text-center px-4">
                Liquid Retina XDR
              </h2>
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold mb-2 drop-shadow-md text-center px-4">
                ProMotion 120Hz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATIC SPECS SECTION BELOW LAPTOP */}
      <section className="bg-black text-white pb-24 pt-4 px-6 flex flex-col items-center relative z-10 -mt-20 md:-mt-32 lg:-mt-40">
        <div className="max-w-5xl text-center">
          
          {/* Logo / Heading */}
          <h3 className="text-2xl md:text-4xl font-bold mb-8 flex justify-center items-center gap-3 tracking-wide">
             <span className="bg-gradient-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text">Liquid Retina XDR</span> 
          </h3>
          
          {/* Descriptive Paragraph */}
          <p className="text-sm md:text-base leading-relaxed mb-8 text-gray-400 max-w-4xl mx-auto">
             Your display is a window into your workflow, which is why we put the absolute best on our MacBook Pro. We've equipped the M4 MacBook Pro with the world's most advanced laptop panel, giving professionals unparalleled immersion and fluid responsiveness. Our Mini-LED technology delivers thousands of local dimming zones, 1600 nits of peak HDR brightness*, and stunning true-to-life colors thanks to full coverage of the P3 wide color space. The M4 MacBook Pro also introduces an all-new nano-texture display option, which drastically reduces glare while preserving image quality for incredibly vivid colors in bright environments.
          </p>
          
          {/* Footnotes */}
          <div className="text-center flex flex-col gap-2 mb-20">
            <p className="text-[10px] md:text-xs text-gray-600">
              * 1600 nits peak brightness for HDR content only. SDR brightness up to 1000 nits.
            </p>
            <p className="text-[10px] md:text-xs text-gray-600">
              * ProMotion technology automatically adjusts refresh rates to match the motion of the content.
            </p>
          </div>

          {/* Grids exactly like the screenshot */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center mb-16">
            <div>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-2">Up to</p>
              <h4 className="text-2xl md:text-3xl font-bold">120Hz</h4>
              <p className="text-xs text-gray-500 mt-2">ProMotion</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-2">Display</p>
              <h4 className="text-2xl md:text-3xl font-bold">Mini-LED</h4>
              <p className="text-xs text-gray-500 mt-2">Panel</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-2">Up to</p>
              <h4 className="text-2xl md:text-3xl font-bold">1600 nits</h4>
              <p className="text-xs text-gray-500 mt-2">Peak Brightness</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-2">Contrast</p>
              <h4 className="text-xl md:text-2xl font-bold">1,000,000:1</h4>
              <p className="text-xs text-gray-500 mt-2">Ratio</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
            <div>
              <h4 className="text-base md:text-lg font-bold">Nano-Texture</h4>
              <p className="text-xs text-gray-500 mt-1">Display Option</p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold">True Tone</h4>
              <p className="text-xs text-gray-500 mt-1">Technology</p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold">P3 Wide</h4>
              <p className="text-xs text-gray-500 mt-1">Color Gamut</p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold">Extreme</h4>
              <p className="text-xs text-gray-500 mt-1">Dynamic Range</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Display;
