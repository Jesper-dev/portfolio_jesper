import React from 'react'
import AnimatedText from "./AnimatedText"

const name = "<jesperPettersson hover={ me } /> "

export default function Home() {
    return (
        <div>
            <AnimatedText textColor="#cd122d" overlayColor="#fdc5c">
                {name}
            </AnimatedText>
        </div>
    )
}
