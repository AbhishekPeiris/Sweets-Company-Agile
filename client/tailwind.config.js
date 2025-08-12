/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-accent": "#ff6b9d",
        "secondary-accent": "#845ec2",
        "tertiary-accent": "#ffeaa7",
        "dark-base": "#2d3436",
        "light-base": "#fdcb6e",
        "cream": "#fff8e7",
        "rose": "#fd79a8",
        "lavender": "#a29bfe",
      },
      fontFamily: {
        'fancy': ['Playfair Display', 'serif'],
        'elegant': ['Dancing Script', 'cursive'],
        'modern': ['Quicksand', 'sans-serif'],
        'stylish': ['Comfortaa', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #ff6b9d' },
          '100%': { boxShadow: '0 0 30px #845ec2, 0 0 40px #ff6b9d' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-sweet': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        'gradient-magic': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      },
    },
  },
  plugins: [],
};
