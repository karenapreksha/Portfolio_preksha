import React from "react";
import { motion } from "framer-motion";
import PrekshaImage from "./assets/profile.jpeg"; // Adjust path as needed
import { Player } from "@lottiefiles/react-lottie-player";
import FlutterAnimation from "./assets/animation.json";

import HeroTyping from "./HeroTyping";
import Contact from "./contact";

const contacts = [
  {
    name: "Email",
    href: "mailto:prekshakarena01@gmail.com",
    icon: "https://www.svgrepo.com/show/512817/mail.svg",
    color: "hover:border-red-400 hover:shadow-[0_0_10px_#f87171]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/preksha-karena-2155b0146",
    icon: "https://www.svgrepo.com/show/448234/linkedin.svg",
    color: "hover:border-blue-400 hover:shadow-[0_0_10px_#60a5fa]",
  },
  {
    name: "Call",
    href: "tel:+919913959692",
    icon: "https://www.svgrepo.com/show/521983/phone.svg",
    color: "hover:border-green-400 hover:shadow-[0_0_10px_#4ade80]",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919913959692",
    icon: "https://www.svgrepo.com/show/475689/whatsapp-color.svg",
    color: "hover:border-green-500 hover:shadow-[0_0_10px_#22c55e]",
  },
];

const projects = [
  {
    name: "WhyWe",
    logo: "https://play-lh.googleusercontent.com/kr6KFrP3wppR_btfh60N89_a7onvZ8Y8JBUJWLKHnrnJ2eOSd7-2H-m-Jp5tL5HoEp8=w480-h960-rw",
    description:
      "A discount platform for restaurants, spas, gyms & more. Built using Flutter + Firebase with real-time coupon validation.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.whywe.in&hl=en_AU",
    appstore: "https://apps.apple.com/in/app/whywe/id6458049161",
  },
  {
    name: "ShopListly",
    logo: "https://lh3.googleusercontent.com/KLLRAKFSX2GJvGdokEqYI_z4N6uwbGwuICV_Z55nPsxTa1cpR_hnPmC9DUZkyPqzdPIWPcc5h2l9e1tjqq3KziQM6ZZC_Wm72lAi=rw",
    description:
      "A smart grocery list manager with reminders, categories, and real-time sync. Built with Flutter & SQLite.",
    playstore:
      "https://www.appbrain.com/app/shoplistly-shopping-list-maker/com.shoplistly.shoplistly",
    appstore: "#",
  },
  {
    name: "DACK",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/35/a4/ff/35a4ffef-119b-e641-0c34-0bcc7a62117d/app-icon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/492x0w.webp",
    description:
      "Use DACK for contactless check-in, mobile room-access, property guides, and more.",
    appstore: "https://apps.apple.com/us/app/dack/id1513885393",
  },

  {
    name: "Booking App",
    logo: "https://play-lh.googleusercontent.com/qBzlEMbMc4bS5tOZ6H12DwrDgkerfvdhkgxaQukh0Rgot7SKaV1qqmCSY4a8O9fLsr4=w480-h960-rw",
    description:
      "With BookINK Customers, finding the greatest artists to bless our city's tattoo scene has never been easier. Our app provides a seamless experience, allowing you to easily search for studios and artists in your city, complete with comprehensive reviews, portfolios, and instant consultations and messaging.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.bookink&hl=en_IN",
    appstore: "https://apps.apple.com/be/app/bookink-customers/id6472483162",
  },
  {
    name: "Himmer Dating App : Match Chat",
    logo: "https://play-lh.googleusercontent.com/pgQSLcpkP8mMqF5TCn0Mr2f-SmMaZwSvEVII-Ym3sgYLrQNdro1ylLN1uQJLTdzrqJI=w480-h960-rw",
    description:
      " Match Chat, the ultimate destination for modern dating! Our app is your passport to meaningful connections and unforgettable experiences. Whether you're searching for lasting love, a fun fling, or something in between, we're here to make your dating journey enjoyable and successful.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.himmer.dating&hl=en_AU",
    appstore: "#",
  },
  {
    name: "Weflection",
    logo: "https://play-lh.googleusercontent.com/7QdaJic_gAmz3g0A0ioaj5vsk_2RI_ZiEz8XU1TngYJWdhIf4jcgOi82mMBxFHMK43Q=w480-h960-rw",
    description:
      "Weflection is revolutionizing behavioral intervention support in K-12 education through a comprehensive, evidence-based digital platform. Specializing in special education and behavior intervention programs, Weflection integrates Dialectical Behavior Therapy (DBT) techniques with social-emotional learning (SEL) to provide a unique solution for students with special needs, their teachers, and parents.",
    playstore: "https://play.google.com/store/apps/details?id=com.app.namaste",
    appstore: "#",
  },

  {
    name: "Liquor Junction",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0a/24/94/0a249466-25b6-d41e-aa38-e92b8ee780f3/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/492x0w.webp",
    description:
      "At Liquor Junction, we take pride in presenting a diverse and carefully curated range of beverages that caters to the varied tastes and preferences of our esteemed customers",
    playstore:
      "https://play.google.com/store/apps/details?id=com.liquor.junction&hl=en_AU",
    appstore:
      "https://apps.apple.com/sg/app/liquor-junction-ghana-app/id6547853117?l=zh-Hans-CN",
  },
  {
    name: "Labels",
    logo: "https://play-lh.googleusercontent.com/7QdaJic_gAmz3g0A0ioaj5vsk_2RI_ZiEz8XU1TngYJWdhIf4jcgOi82mMBxFHMK43Q=w480-h960-rw",
    description:
      "Labels is more than just a shopping platform; it’s a transformative experience that empowers both shoppers and designers. Dive into a world of unique apparel for women, men, and kids, handpicked to ensure quality and style, reflecting the rich cultural heritage and modern trends of Kuwait.",
    appstore: "https://apps.apple.com/in/app/labels/id6482297717",
    playstore: "#",
  },
  {
    name: "Talat",
    logo: "https://play-lh.googleusercontent.com/IWIuVClOskoV5ZVsIhDf8Ns6VfuS3fgsRxWNtf0CfikHoC7OceNOuLFhH9Z2_SrD1kYc=w480-h960-rw",
    description:
      "Talat is a platform that transforms the way customers discover and engage with new activities throughout Kuwait. Our commitment to eliminate boredom makes tala’t a vital tool for anyone seeking excitement and adventure.",
    appstore: "https://apps.apple.com/in/app/labels/id6482297717",
    playstore:
      "https://play.google.com/store/apps/details?id=com.app.talat&hl=en_IN",
    appstore: "https://apps.apple.com/in/app/talat/id6504086783",
  },
  {
    name: "Healthcare Marketing Tips",
    logo: "https://play-lh.googleusercontent.com/HiaIaWdG0jiG3UXnaJHTJh1lMD5LdbqdlVZk0MAT_IAm5twVg36MxwCmAnk37vadI30=w480-h960-rw",
    description:
      "Healthcare Marketing Tips is a stylish one-stop solution for all your healthcare marketing needs. Healthcare Marketing Tips is a free guest blogging platform that provides marketing insights to promote healthcare services.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.healthmarketing.www&hl=en_IN",
    appstore:
      "https://apps.apple.com/us/app/healthcare-marketing-tips/id1582163049",
  },
  {
    name: "ConfirmTkt: Train Booking App",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bd/20/93/bd209367-14d6-7eca-3f10-682c5e0008e7/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/492x0w.webp",
    description:
      "IRCTC Authorised Train Ticket: Easy IRCTC Login | PNR Status | Travel Guarantee, Train Ticket Booking App",
    playstore: "#",
    appstore:
      "https://apps.apple.com/in/app/confirmtkt-train-booking-app/id1037974704",
  },
  {
    name: "Yemen Mazad يمن مزاد",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/fa/67/47fa672b-663c-9ba8-964b-196f73130128/AppIcon-0-1x_U007emarketing-0-11-0-85-220-0.png/460x0w.webp",
    description:
      "Welcome to Yemen Mazad, your premier classifieds app designed specifically for the Yemeni market. Discover a world of limitless opportunities where you can conveniently buy and sell goods right from your smartphone.",
    playstore: "#",
    appstore:
      "https://apps.apple.com/us/app/yemen-mazad-%D9%8A%D9%85%D9%86-%D9%85%D8%B2%D8%A7%D8%AF/id1550918249",
  },
];

const App = () => {
  return (
    <main className="font-sans scroll-smooth">
      <HeroTyping />

      <section
        id="about"
        className="py-20 px-6 bg-[#0f0f1c] text-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white relative inline-block mb-12">
          <span className="text-[var(--brand-color)]">About Me</span>
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-16 h-1 bg-[var(--brand-color)] rounded-full"></span>
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="max-w-6xl mx-auto flex flex-row md:flex-col items-start gap-0">
            <div className="text-justify space-y-6 text-gray-300 text-[17px] leading-relaxed">
              <p className="mb-6">
                I’m{" "}
                <span className="text-white font-semibold">Preksha Karena</span>
                , a results-driven{" "}
                <span className="text-brand">
                  Senior Flutter & iOS Developer
                </span>{" "}
                with over 5 years of hands-on experience building scalable,
                high-performance mobile applications across Android and iOS
                platforms. My technical expertise spans modern frameworks and
                technologies including{" "}
                <span className="text-white font-semibold">
                  Flutter, Swift, Dart, Objective-C, Firebase
                </span>
                , RESTful APIs, in-app purchases, and WebSocket communication. I
                specialize in crafting user-centric interfaces with strong
                architecture using state management solutions like{" "}
                <span className="text-white font-semibold">
                  GetX, Provider,
                </span>{" "}
                and <span className="text-white font-semibold">Bloc</span>. I’ve
                successfully led and contributed to full-lifecycle development
                of numerous production-ready applications, consistently
                delivering intuitive UX and reliable performance under tight
                deadlines. With a strong foundation in Agile methodologies and
                cross-functional team collaboration, I bring not only coding
                expertise but also exceptional problem-solving, communication,
                and time management skills. I'm fluent in English, Hindi, and
                Gujarati, and continuously evolving to stay ahead in the rapidly
                advancing mobile ecosystem.
              </p>
            </div>
            <a
              href="/Preksha_Karena_Resume.pdf"
              download
              className="inline-block mt-6 text-white underline underline-offset-4 decoration-1 hover:text-brand transition font-semibold"
            >
              Download Resume
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              src={PrekshaImage}
              alt="Preksha Karena"
              className="w-64 h-80 object-cover rounded-xl border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            />
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-20 bg-[#121212] text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
          {[
            {
              name: "Flutter",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            },
            {
              name: "Dart",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
            },
            {
              name: "Firebase",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            },
            {
              name: "Git",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "Swift",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
            },
            {
              name: "Android Studio",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
            },
            {
              name: "WebSocket",
              icon: "https://socket.io/images/logo-dark.svg",
            },
            {
              name: "Figma",
              icon: "https://icon.icepanel.io/Technology/svg/Figma.svg",
            },
            {
              name: "Postman",
              icon: "https://icon.icepanel.io/Technology/svg/Postman.svg",
            },
            {
              name: "GitHub",
              icon: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
            },
            {
              name: "Visual Studio",
              icon: "https://icon.icepanel.io/Technology/svg/Visual-Studio.svg",
            },
            {
              name: "AndroidStudio",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <div className="w-24 h-24 rounded-full border-1 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] flex items-center justify-center bg-[#1f1f1f]">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </div>
              <p className="mt-3 text-sm text-gray-200">{skill.name}</p>
              <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-20 px-6 bg-[#121212] text-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--brand-color)]">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/8 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 flex flex-col items-left text-left space-y-4 transition duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-[1.02]"
            >
              {/* Logo */}
              <img
                src={project.logo}
                alt={`${project.name} Logo`}
                className="w-20 h-20 object-cover rounded-md"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold">{project.name}</h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              {/* Buttons */}
              <div className="flex flex-wrap justify-left gap-4 pt-2">
                {/* Play Store Button */}
                {project.playstore && project.playstore !== "#" && (
                  <motion.a
                    href={project.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-[#1c1c1c] border border-gray-600 px-4 py-2 rounded-lg hover:border-green-500 hover:shadow-[0_0_10px_#22c55e] transition"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                      alt="Play Store"
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-white">Play Store</span>
                  </motion.a>
                )}

                {/* App Store Button */}
                {project.appstore && project.appstore !== "#" && (
                  <motion.a
                    href={project.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-[#1c1c1c] border border-gray-600 px-4 py-2 rounded-lg hover:border-blue-400 hover:shadow-[0_0_10px_#60a5fa] transition"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/apple/apple-tile.svg"
                      alt="App Store"
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-white">App Store</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <hr className="my-16 border-t border-gray-700 w-full" />

      <Contact />
    </main>
  );
};

export default App;
