"use client"

import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
  },
  {
    url: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Mathilde Langevin",
    title: "A table topped with two wine glasses and plates",
  },
]

const HeroSection = () => {
  return (
    <section className="flex w-full h-screen flex-col items-center justify-center overflow-hidden bg-background md:overflow-visible">
      <Floating sensitivity={-0.5} className="h-full w-full">
        {/* Top left small image */}
        <FloatingElement depth={0.5} className="top-[15%] left-[2%] md:top-[8%] md:left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Top center-left large image */}
        <FloatingElement depth={1} className="top-[2%] left-[8%] md:top-[10%] md:left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 lg:w-60 lg:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Top right large image */}
        <FloatingElement depth={2} className="top-[0%] right-[2%] md:top-[2%] md:right-[12%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-64 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Right side square image */}
        <FloatingElement depth={1} className="top-[25%] right-[2%] md:top-[40%] md:right-[3%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Bottom left large square image */}
        <FloatingElement depth={1} className="bottom-[5%] left-[2%] md:bottom-[5%] md:left-[3%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Bottom left smaller image */}
        <FloatingElement depth={2} className="bottom-[0%] left-[35%] md:bottom-[10%] md:left-[27%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            src={exampleImages[5].url}
            alt={exampleImages[5].title}
            className="w-28 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Bottom right tall image */}
        <FloatingElement depth={4} className="bottom-[15%] right-[20%] md:bottom-[15%] md:right-[22%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            src={exampleImages[6].url}
            alt={exampleImages[6].title}
            className="w-20 h-24 sm:w-24 sm:h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Bottom right image */}
        <FloatingElement depth={1} className="bottom-[2%] right-[5%] md:bottom-[5%] md:right-[8%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
            src={exampleImages[7].url}
            alt={exampleImages[7].title}
            className="w-24 h-28 sm:w-32 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl sm:rounded-2xl"
          />
        </FloatingElement>

        {/* Center content */}
        <div className="z-50 flex h-full w-full flex-col items-center justify-center pointer-events-none">
          
          {/* Highlighted Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold tracking-widest uppercase text-sm md:text-base shadow-sm backdrop-blur-sm">
              Social_Buzzz
            </span>
          </motion.div>

          <LayoutGroup>
            <motion.h1
              className="text-3xl font-bold text-center sm:text-5xl md:text-7xl lg:text-8xl z-50 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Make ur brand{" "}
              <LayoutGroup>
                <motion.span layout className="flex items-center justify-center">
                  <TextRotate
                    texts={[
                      "viral ✨",
                      "grow 📈",
                      "stand out 🌟",
                      "unforgettable 💥",
                      "buzzz 🐝",
                    ]}
                    mainClassName="overflow-hidden text-primary py-0 pb-2 md:pb-4 rounded-xl justify-center"
                    staggerFrom="last"
                    staggerDuration={0.025}
                    rotationInterval={2500}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  />
                </motion.span>
              </LayoutGroup>
            </motion.h1>
          </LayoutGroup>
          
          <motion.p
            className="text-sm sm:text-base md:text-lg text-center text-muted-foreground mt-2 md:mt-4 max-w-md md:max-w-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Professional social media management, content creation & growth strategies. 
            Transform your online presence with Social Buzzz.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:opacity-90 transition-opacity cursor-pointer"
            >
              Get Started →
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm sm:text-base hover:bg-accent transition-colors cursor-pointer"
            >
              View Services
            </a>
          </motion.div>

          {/* Tagline highlighted below view services */}
          <motion.p
            className="mt-8 text-sm sm:text-base font-semibold text-foreground/80 flex items-center gap-2 bg-background/60 backdrop-blur-md px-5 py-2 rounded-full border border-border/50 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            🔥 Being consistent = Growth
          </motion.p>
          
        </div>
      </Floating>
    </section>
  )
}

export default HeroSection