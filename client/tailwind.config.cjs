// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // v4-specific options
  corePlugins: {
    preflight: true, // equivalent to @tailwind base
  }
}