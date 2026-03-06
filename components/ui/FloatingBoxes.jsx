'use client'
import { useEffect, useRef } from 'react'

const boxes = [
  { size: 80, color: '#E8927C', delay: '0s', duration: '8s', x: '5%', y: '10%', opacity: 0.08 },
  { size: 120, color: '#7A9E7E', delay: '1s', duration: '10s', x: '85%', y: '5%', opacity: 0.06 },
  { size: 60, color: '#D4A853', delay: '2s', duration: '7s', x: '20%', y: '80%', opacity: 0.1 },
  { size: 100, color: '#C1623F', delay: '0.5s', duration: '9s', x: '70%', y: '60%', opacity: 0.07 },
  { size: 45, color: '#F2C4B0', delay: '3s', duration: '6s', x: '40%', y: '15%', opacity: 0.12 },
  { size: 90, color: '#4A7C59', delay: '1.5s', duration: '11s', x: '90%', y: '80%', opacity: 0.05 },
  { size: 55, color: '#E8927C', delay: '4s', duration: '8s', x: '15%', y: '50%', opacity: 0.09 },
  { size: 70, color: '#D4A853', delay: '2.5s', duration: '9s', x: '60%', y: '30%', opacity: 0.07 },
]

export default function FloatingBoxes({ variant = 'light' }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {boxes.map((box, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: box.size,
            height: box.size,
            left: box.x,
            top: box.y,
            backgroundColor: box.color,
            opacity: box.opacity,
            borderRadius: i % 3 === 0 ? '20px' : i % 3 === 1 ? '50%' : '4px',
            animation: `float ${box.duration} ease-in-out ${box.delay} infinite`,
            transform: `rotate(${i * 15}deg)`,
          }}
        />
      ))}
    </div>
  )
}
