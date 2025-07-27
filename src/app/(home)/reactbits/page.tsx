'use client';

import React from "react";
import GradientText from "@/components/reactbits/gradient-text";
import CardSwap, { Card } from '@/components/reactbits/card-swap'
import Stepper, { Step } from '@/components/reactbits/stepper';
import TiltedCard from '@/components/reactbits/titled-card';
import ChromaGrid from '@/components/reactbits/chroma-grid';
import Iridescence from '@/components/reactbits/iridescence';

export default function MagicUIPage() {
  return (
    <div className="min-h-screen pt-56">
      <div className="flex flex-col items-center justify-center w-full relative gap-16 max-w-7xl mx-auto px-4">
        {/* Gradient Text */}
        <div className="mb-8 text-center">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Add a splash of color!
          </GradientText>
        </div>

        {/* Card Swap with Example Text */}
        <div className="h-96 w-full relative mb-16 flex items-center justify-center max-w-6xl">
          {/* Left side text */}
          <div className="w-1/3 pr-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interactive Card Swap</h3>
            <p className="text-gray-300 mb-4">
              Watch as these cards automatically rotate and swap positions, creating a dynamic visual experience. 
              Each card contains unique content with images and descriptions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>• Automatic rotation every 5 seconds</p>
              <p>• Smooth elastic animations</p>
              <p>• Responsive design</p>
              <p>• Hover to pause (optional)</p>
            </div>
          </div>

          {/* Card Swap Component */}
          <div className="w-2/3 h-full relative">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card className="p-6">
                <div className="h-32 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" 
                    alt="Mountain landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mountain Adventure</h3>
                <p className="text-gray-300 text-sm">
                  Explore breathtaking mountain landscapes with stunning views and challenging trails. 
                  Perfect for nature enthusiasts and adventure seekers.
                </p>
              </Card>
              <Card className="p-6">
                <div className="h-32 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop" 
                    alt="Forest path"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Forest Discovery</h3>
                <p className="text-gray-300 text-sm">
                  Immerse yourself in the tranquility of ancient forests. 
                  Discover hidden paths, diverse wildlife, and the peaceful sounds of nature.
                </p>
              </Card>
              <Card className="p-6">
                <div className="h-32 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" 
                    alt="Ocean waves"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ocean Serenity</h3>
                <p className="text-gray-300 text-sm">
                  Experience the calming rhythm of ocean waves. 
                  Perfect for meditation, relaxation, and finding inner peace by the sea.
                </p>
              </Card>
            </CardSwap>
          </div>
        </div>

        {/* Stepper */}
        <div className="w-full max-w-2xl">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <h2>Welcome to the React Bits stepper!</h2>
              <p>Check out the next step!</p>
            </Step>
            <Step>
              <h2>Step 2</h2>
              <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
              <p>Custom step content!</p>
            </Step>
            <Step>
              <h2>How about an input?</h2>
              <input placeholder="Your name?" />
            </Step>
            <Step>
              <h2>Final Step</h2>
              <p>You made it!</p>
            </Step>
          </Stepper>
        </div>

        {/* Chroma Grid */}
        <div style={{ height: '600px', position: 'relative' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

        {/* Iridescence */}
        <div className="flex justify-center h-96 w-full relative mb-16 rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            <Iridescence
              color={[0.5, 0.6, 0.8]}
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
            />
            
            {/* Hero Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              {/* New Background Button */}
              <button className="mb-8 px-4 py-2 rounded-lg border border-blue-300 bg-blue-300/20 text-gray-300 text-sm font-medium hover:bg-blue-300/30 transition-colors">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  New Background
                </span>
              </button>

              {/* Hero Title */}
              <h1 className="text-4xl md:text-6xl text-shadow-lg font-bold text-white text-center mb-8 leading-tight">
                Radiant iridescence with<br />
                customizable colors
              </h1>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-lg border border-blue-300 bg-blue-300/20 text-gray-300 font-semibold hover:bg-blue-300/30 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tilted Card */}
        <div className="flex justify-center">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
];