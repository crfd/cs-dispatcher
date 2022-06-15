const config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black/primary': '#000',
        'black/1': '#666',
        'black/2': '#AAA',
        'white/primary': '#FFF',
        'white/1': '#FAFAFA',
        'white/2': '#EEE',
        'white/3': '#DDD',
        'red/primary': '#E93731',
        'red/dark': '#BA2621',
        'red/light': '#EFA3A0',
        'yellow/primary': '#F5A623',
        'yellow/dark': '#D7911E',
        'yellow/light': '#EFC47D',
        'green/primary': '#0CCE6B',
        'green/dark': '#0BAB59',
        'green/light': '#76D4A4',
        'blue/primary': '#0070F3',
        'blue/dark': '#0055B8',
        'blue/light': '#65A7F3',
        'purple/primary': '#6C5CE7',
        'purple/dark': '#5A4AD5',
        'purple/light': '#D3CFF5'
      }
    }
  },
  plugins: []
}

module.exports = config
