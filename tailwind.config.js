module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    minHeight: {
      '72': '18rem',
    },
    minWidth: {
      '8': '2rem',
    },
    extend: {
      maxWidth: {
        '72': '18rem',
      },
      backgroundImage: {
        'case-study-title': "linear-gradient(0deg, rgba(54, 54, 54, 0.20) 0%, rgba(0, 0, 0, 0.00) 44.27%)"
      },
      spacing: {
        '0.5': '0.125rem',
      },
      dropShadow: {
        'white-bg-lg': [
            '0 10px 8px rgb(0 0 0 / 0.04)',
            '0 -0px 4px rgb(0 0 0 / 0.1)'
        ],
        'white-bg-xl': [
            '0 10px 8px rgb(0 0 0 / 0.04)',
            '0 0px 12px rgb(0 0 0 / 0.1)'
        ],
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      height: {
        '120': '30rem',
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
