module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
			  'sanFrancisco': "url('sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('sanFranciscoDesktop.jpg')",
			  'yosemite': "url('yosemite.jpg')",
			  'LA': "url('LA.jpg')",
			  'seattle': "url('seattle.jpg')",
			  'new_york': "url('new_york.jpg')",
			  'norway': "url('norway.jpg')",
			  'sydney': "url('sydney.jpg')",
			  'miami': "url('miami.jpg')",
			  'switzerland': "url('switzerland.jpg')",
			  'bali': "url('bali.jpg')",
			  'norway': "url('norway.jpg')",
			  'chicago': "url('chicago.jpg')",
			  'europe': "url('europe.jpg')",
			  'iceland': "url('iceland.jpg')",
			  
			},
			backgroundColor: theme =>({
				...theme('colors'),
				'principal': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			}),
			textColor: theme => ({
        ...theme('colors'),
				'principal': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			}),
    },
  },
  plugins: [],
}
