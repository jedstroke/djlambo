import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { PauseOutlined, PlayCircleOutlined } from '@ant-design/icons';

const Waveform = ({ audio }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 2,
      barHeight: 10,
      cursorWidth: 0,
    });
    waveSurfer.load(audio);
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <WaveSurferWrap>
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
      >
        {isPlaying ? (
          <PauseOutlined
            style={{
              fontSize: "3em",
              background: "transparent",
              borderRadius: "100%",
            }}
          />
        ) : (
          <PlayCircleOutlined
            style={{
              fontSize: "3em",
              background: "transparent",
              borderRadius: "100%",
            }}
          />
        )}
      </button>
      <div ref={containerRef} />
    </WaveSurferWrap>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

const WaveSurferWrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    background-color: white;
  }
`;


export default Waveform;
