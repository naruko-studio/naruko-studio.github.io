"use client"

import React from "react"
import Typical from "react-typical"

interface TypingEffectProps {
  steps: (string | number)[]
}

const TypingEffect: React.FC<TypingEffectProps> = ({ steps }) => {
  return <Typical steps={steps} loop={Infinity} wrapper="span" />
}

export default TypingEffect
