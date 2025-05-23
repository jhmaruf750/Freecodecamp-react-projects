import React, { useState, useEffect } from 'react'

const data = [
  { key: 'Q', sound: 'Heater-1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', sound: 'Heater-2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', sound: 'Heater-3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', sound: 'Heater-4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', sound: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', sound: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', sound: "Kick-n'-Hat", src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', sound: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', sound: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
]

const App = () => {
  const [display, setDisplay] = useState('')

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase()
    const audio = document.getElementById(key)
    if (audio) {
      const soundName = data.find(d => d.key === key).sound
      setDisplay(soundName)
      audio.currentTime = 0
      audio.play()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div id="drum-machine" style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Drum Machine</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px', justifyContent: 'center' }}>
        {data.map(d => (
          <button
            key={d.key}
            className="drum-pad"
            id={d.sound}
            onClick={() => {
              const audio = document.getElementById(d.key)
              setDisplay(d.sound)
              audio.currentTime = 0
              audio.play()
            }}
            style={{
              width: '100px',
              height: '100px',
              fontSize: '20px',
              borderRadius: '8px',
              background: '#333',
              color: 'white'
            }}
          >
            {d.key}
            <audio className="clip" id={d.key} src={d.src}></audio>
          </button>
        ))}
      </div>
      <p id="display" style={{ marginTop: '20px', fontSize: '18px' }}>{display}</p>
    </div>
  )
}

export default App
