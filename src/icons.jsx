// Inline SVG icons converted from the original DC component ICON map.
// `stroke` defaults to teal; pass stroke="#0B2730" for the dark variant.

const Svg = ({ children, stroke = '#0E7D86', size = 26 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={stroke}
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const DARK = '#0B2730'

export const Icon = ({ name, stroke, size }) => {
  switch (name) {
    case 'shield':
      return <Svg stroke={stroke ?? DARK} size={size}>
        <path d="M12 3l7 2.6v5.3c0 4.2-3 7-7 8.6-4-1.6-7-4.4-7-8.6V5.6L12 3Z" />
        <path d="M12 14.6s-2.6-1.5-2.6-3.4a1.4 1.4 0 0 1 2.6-.6 1.4 1.4 0 0 1 2.6.6c0 1.9-2.6 3.4-2.6 3.4Z" />
      </Svg>
    case 'chat':
      return <Svg stroke={stroke ?? DARK} size={size}>
        <path d="M20.5 12a8 8 0 0 1-11.4 7.2L4 20.5l1.4-4.8A8 8 0 1 1 20.5 12Z" />
      </Svg>
    case 'plan':
      return <Svg stroke={stroke ?? DARK} size={size}>
        <path d="M7 4h7l4 4v12H7z" />
        <path d="M14 4v4h4" />
        <line x1="10" y1="13" x2="16" y2="13" />
        <line x1="10" y1="16" x2="14" y2="16" />
      </Svg>
    case 'heartHand':
      return <Svg stroke={stroke ?? DARK} size={size}>
        <path d="M12 20s-6-3.8-6-8a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 4.2-6 8-6 8Z" />
      </Svg>
    case 'control':
      return <Svg stroke={stroke ?? DARK} size={size}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3" />
      </Svg>
    case 'check':
      return <Svg stroke={stroke} size={size}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.4 12.2l2.3 2.3 4.9-4.9" />
      </Svg>
    case 'drop':
      return <Svg stroke={stroke} size={size}>
        <path d="M12 3.5s5.5 6 5.5 10a5.5 5.5 0 0 1-11 0c0-4 5.5-10 5.5-10Z" />
      </Svg>
    case 'root':
      return <Svg stroke={stroke} size={size}>
        <circle cx="12" cy="8.5" r="4.5" />
        <line x1="10.5" y1="12.5" x2="9.5" y2="21" />
        <line x1="13.5" y1="12.5" x2="14.5" y2="21" />
      </Svg>
    case 'crown':
      return <Svg stroke={stroke} size={size}>
        <path d="M5 8.5l3.4 3L12 5l3.6 6.5L19 8.5V16H5z" />
        <line x1="5" y1="18.5" x2="19" y2="18.5" />
      </Svg>
    case 'sparkle':
      return <Svg stroke={stroke} size={size}>
        <path d="M12 3.5l1.7 4.6 4.6 1.7-4.6 1.7L12 16l-1.7-4.5L5.7 9.8l4.6-1.7z" />
      </Svg>
    case 'smile':
      return <Svg stroke={stroke} size={size}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.2 14a4 4 0 0 0 7.6 0" />
        <circle cx="9.2" cy="10" r="0.4" />
        <circle cx="14.8" cy="10" r="0.4" />
      </Svg>
    case 'align':
      return <Svg stroke={stroke} size={size}>
        <line x1="4" y1="12" x2="20" y2="12" />
        <circle cx="8" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="16" cy="12" r="1.5" />
      </Svg>
    default:
      return null
  }
}
