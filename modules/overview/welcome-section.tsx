"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TypewriterText = () => {
  const words = ["Code,", "Build,", "Deploy,", " and Repeat."]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, 100) // Typing speed
        return () => clearTimeout(timeout)
      } else {
        // Word completed, wait then move to next word
        const timeout = setTimeout(() => {
          if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1)
            setCurrentText("")
          } else {
            // All words completed, restart
            setTimeout(() => {
              setCurrentWordIndex(0)
              setCurrentText("")
            }, 10) // Wait 2 seconds before restarting
          }
        }, 200) // Wait 1 second after completing word
        return () => clearTimeout(timeout)
      }
    }
  }, [currentText, currentWordIndex, isTyping, words])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="text-2xl font-bold   font-mono">
      <span className="inline-flex items-center">
        {words.slice(0, currentWordIndex).map((word, index) => (
          <span key={index} className="mr-2">
            {word}
          </span>
        ))}
        <span>
          {currentText}
          {showCursor && <span className="animate-pulse">_</span>}
        </span>
      </span>
    </div>
  )
}

export const WelcomeSection =()=>{

 
    return(
   <Card className="w-full">
      <CardContent className="h-full">
        <div className=" p-6 h-full flex flex-col space-y-4 ">
            <div className="flex text-sm  tracking-tighter items-center gap-2">
                <Calendar/>
          {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            </div>
          <TypewriterText />
        </div>
      </CardContent>
    </Card>
    )
}