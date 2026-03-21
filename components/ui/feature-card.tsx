"use client";

import { useState } from "react";
import { ChevronUp, Wand2, Loader2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GoogleGenAI } from "@google/genai";

interface FeatureCardProps {
  date: string;
  title: string;
  description: string;
  initialBgImage: string;
  className?: string;
}

export function FeatureCard({ date, title, description, initialBgImage, className }: FeatureCardProps) {
  const [bgImage, setBgImage] = useState(initialBgImage);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "3:4",
            imageSize: "1K"
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setBgImage(`data:image/png;base64,${base64EncodeString}`);
          setShowPrompt(false);
          setPrompt("");
          break;
        }
      }
    } catch (error) {
      console.error("Failed to generate image:", error);
      alert("Failed to generate image. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={`relative p-6 inline-block w-full ${className}`}>
      {/* Crop Marks */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-black -translate-x-1/2 -translate-y-1/2 z-10" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-black translate-x-1/2 -translate-y-1/2 z-10" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-black -translate-x-1/2 translate-y-1/2 z-10" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-black translate-x-1/2 translate-y-1/2 z-10" />

      {/* Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200" />
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gray-200" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gray-200" />

      {/* Card */}
      <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden group bg-gray-900 shadow-2xl">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          unoptimized={bgImage.startsWith('data:')}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

        {/* AI Generate Button */}
        <button
          onClick={() => setShowPrompt(true)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white text-xs sm:text-sm font-medium transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 flex items-center gap-2"
          title="Generate new background"
        >
          <Wand2 className="w-3 h-3 sm:w-4 sm:h-4" />
          Generate
        </button>

        {/* Prompt Input Overlay */}
        {showPrompt && (
          <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-md p-6 flex flex-col items-center justify-center">
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <form onSubmit={handleGenerate} className="w-full max-w-sm flex flex-col gap-4">
              <div className="text-center mb-2">
                <h4 className="text-white text-xl font-semibold mb-1">AI Background</h4>
                <p className="text-white/60 text-sm">Describe the image you want to generate.</p>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., A futuristic neon city at night, cyberpunk style..."
                className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                rows={4}
                autoFocus
              />
              <button
                type="submit"
                disabled={isGenerating || !prompt}
                className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Image"
                )}
              </button>
            </form>
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col text-white pointer-events-none">
          <div className="text-sm font-medium tracking-wide">
            {date}
          </div>

          <div className="mt-auto flex flex-col items-center text-center">
            <h3 className="text-4xl sm:text-[2.75rem] leading-[1.05] font-bold tracking-tight mb-3 sm:mb-4">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
            <div className="w-6 h-[2px] bg-white mb-4 sm:mb-6" />
            <p className="text-xs sm:text-sm text-gray-300 max-w-[240px] mb-8 sm:mb-10 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col items-center text-xs sm:text-sm font-medium text-white/90">
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
              <Link href="/servicios" className="pointer-events-auto hover:underline">
                Ver Todo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
