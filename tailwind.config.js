module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: '2rem',
     
    },
    fontFamily: {
      "poppins": ["poppins sans-serif"],
    },
    extend: {
      colors:{
      "donkersteGroen": "#191A19",
      "donkerGroen": "#00AE22",
      "lichtGroen": "#ACCF6F",
      "geel": "#FFF95E",
      "oranje":"#FD7D00",
      "textkleur":"#005154",
    },
    backgroundImage: {
      'achtergrondOverOns': "url('/src/bijlage/img/backgroundWolk.png')",
      'speelplaatsSchool': "url('/src/bijlage/img/speelplaats.png')",
    }
   
  },
  },
  plugins: [require('@tailwindcss/forms')],
}
