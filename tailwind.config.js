/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Brand100: '#FB4023',
        Brand80: '#FB634B',
        Brand60: '#FC8573',
        Brand40: '#FDA89B',
        Brand20: '#FECBC3',
        Brand10: '#FFEEEB',
        Neutral100: '#333B47',
        Neutral80: '#566376',
        Neutral60: '#7D8BA1',
        Neutral40: '#ACB5C3',
        Neutral20: '#DCDFE5',
        Neutral10: '#F3F4F6',
        Base100: '#111418',
        Base10: '#FFFFFF',
      },
      screens: {
        xs: { max: '600px' },
        sm: { min: '601px', max: '768px' },
        md: { min: '769px', max: '1024px' },
        lg: { min: '1025px', max: '1440px' },
        xl: { min: '1441px' },
      },
    },
  },
  plugins: [],
};
