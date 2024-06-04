import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
        'resilience':'#034746',
        'growth':'#28B572',
        'clarity':'#FFFFFF',
        'energy':'#F47B6C',
        'neutral':'#505251',
        'nav':'#F2F2F2'

      },
      fontFamily:{
        rsans: ["var(--rana-opensans)"],
        varela: ["var(--rana-varela)"],
      },
    },
  },
  important:true,
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
