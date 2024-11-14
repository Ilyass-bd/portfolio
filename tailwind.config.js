module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins,Orbitron, sans-serif',
      secondary: 'Rajdhani, sans-serif',
      tertiary: 'Aldrich, sans-serif',
      poppins: 'Poppins, sans-serif',
      rubik: 'Rubik, sans-serif',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/bluebg.jpg')",
        about: "url('./assets/Profile2.png')",
        services: "url('./assets/srv.png')",
      },
    },
  },
  plugins: [],
};
