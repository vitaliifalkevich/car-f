import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: rgb(241, 242, 243);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const AvatarLoader: React.FC = () => {
  return (
    <Container>
      <svg
        style={{
          margin: 'auto',
          background: 'rgb(241, 242, 243)',
          display: 'block',
          shapeRendering: 'auto',
          borderRadius: '50%',
        }}
        width="65px"
        height="65px"
        viewBox="0 0 65 65"
        preserveAspectRatio="xMidYMid"
      >
        <path
          fill="none"
          stroke="#003760"
          strokeWidth="3"
          strokeDasharray="42.76482137044271 42.76482137044271"
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          strokeLinecap="round"
          style={{ transform: 'scale(0.65)' }}
        >
          <animate
            attributeName="stroke-dashoffset"
            repeatCount="indefinite"
            dur="1.2s"
            keyTimes="0;1"
            values="0;256.58892822265625"
          ></animate>
        </path>
      </svg>
    </Container>
  )
}

export default AvatarLoader
