import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const EditIcon = ({ width = 24, height = 24, color = '#fff' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.83-1.82z"
      fill={color}
    />
  </Svg>
)

export const DeleteIcon = ({ width = 24, height = 24, color = '#fff' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 8H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8z"
      fill={color}
    />
  </Svg>
)

export const StarIcon = () => (
  <Svg width="13.13" height="13.23" viewBox="0 0 24 24">
    <Path
      d="M12 2.5l3.09 6.26 6.91 1-5 4.87L18.18 21 12 17.27 5.82 21l1.18-6.37-5-4.87 6.91-1L12 2.5z"
      fill="#FFFFFF"
    />
  </Svg>
)

export const FeedbackIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2.5l3.09 6.26 6.91 1-5 4.87L18.18 21 12 17.27 5.82 21l1.18-6.37-5-4.87 6.91-1L12 2.5z"
      fill="#fff"
    />
  </Svg>
)
