module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily :{
        oswald :['Oswald',' sans-serif'],
        robo :['Roboto']
      },
      scale :{
        '23':'.2'
      }
    },
  },
  variants: {
    extend: {
      scale :['group-hover'],
      height :['group-hover'],
      width :['group-hover'],
      borderRadius :['group-hover']
    },
  },
  plugins: [
 
  ]
}
