import React from "react";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black/60 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4 text-white">
              {item.title}
            </p>

            <div className="text-sm prose prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Building the Future of Web3",
    description: (
      <>
        <p>
          As a blockchain developer with over 5 years of experience, I've been at the forefront of Web3 innovation. My journey began with traditional web development, but I quickly became fascinated by blockchain technology and its potential to revolutionize digital systems.
        </p>
        <p>
          I specialize in building decentralized applications that bridge the gap between complex blockchain protocols and user-friendly interfaces. My expertise spans DeFi protocols, NFT platforms, and cross-chain solutions.
        </p>
        <p>
          Currently, I'm focused on developing scalable blockchain solutions that address real-world challenges while maintaining the highest standards of security and user experience.
        </p>
      </>
    ),
    badge: "About Me",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Technical Expertise & Skills",
    description: (
      <>
        <p>
          My technical journey has equipped me with a comprehensive skill set in blockchain development and web technologies. I've mastered Solidity for smart contract development, working extensively with the Ethereum ecosystem and various Layer 2 solutions.
        </p>
        <p>
          Beyond blockchain, I'm proficient in modern web development using React, TypeScript, and Node.js. I believe in creating seamless user experiences while maintaining robust backend architectures.
        </p>
      </>
    ),
    badge: "Skills",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Latest Projects & Achievements",
    description: (
      <>
        <p>
          I've successfully delivered multiple high-impact blockchain projects, from DeFi protocols handling millions in TVL to NFT marketplaces supporting thousands of daily transactions. Each project represents a step forward in making blockchain technology more accessible and useful.
        </p>
        <p>
          My commitment to the blockchain space extends beyond development. I actively contribute to open-source projects and participate in hackathons, helping build a stronger Web3 community.
        </p>
      </>
    ),
    badge: "Projects",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=2000",
  },
];