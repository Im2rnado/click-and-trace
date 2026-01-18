# Click & Trace

> Tracing the forgotten cities of Ancient Egypt

An interactive web experience that takes you on a journey through the lost cities of Ancient Egypt. Explore historical sites through an immersive map interface with scroll-based navigation, detailed city information, and multimedia content.

🌐 **Live Demo**: [https://im2rnado.github.io/click-and-trace/](https://im2rnado.github.io/click-and-trace/)

## ✨ Features

- 🗺️ **Interactive Map Experience** - Navigate through ancient Egyptian cities using Mapbox GL
- 📜 **Scroll-Based Navigation** - Smooth scroll-controlled exploration through historical sites
- 🏛️ **City Details** - Comprehensive information about each ancient city including:
  - English and hieroglyphic names
  - Historical descriptions
  - Geographic coordinates
  - Multimedia content
- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 📱 **Mobile Responsive** - Optimized for all device sizes
- 🌙 **Time-Based Map Styles** - Dynamic map visualization

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Maps**: Mapbox GL JS
- **Animations**: Framer Motion
- **Routing**: React Router DOM (HashRouter for GitHub Pages)
- **Fonts**: 
  - 29LT Makina (Headers)
  - Helvetica (Body)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Mapbox API token (for map functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Im2rnado/click-and-trace.git
   cd click-and-trace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Mapbox Token**
   
   Add your Mapbox access token in `src/components/MapExperience.jsx`:
   ```javascript
   const token = "your-mapbox-token-here";
   ```
   
   Get your token from [Mapbox](https://account.mapbox.com/access-tokens/)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
click-and-trace/
├── public/
│   ├── logo.png          # Project logo
│   └── fonts/            # Custom fonts (29LT Makina)
├── src/
│   ├── components/       # React components
│   │   ├── CityOverlay.jsx
│   │   ├── CityPin.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MapExperience.jsx
│   │   └── ScrollController.jsx
│   ├── data/
│   │   └── cities.js     # City data and information
│   ├── pages/
│   │   ├── City.jsx      # Individual city detail page
│   │   └── Home.jsx      # Main landing page
│   ├── utils/
│   │   ├── mapHelpers.js
│   │   └── timeMode.js
│   ├── App.jsx           # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
└── vite.config.js       # Vite configuration
```

## 🏗️ Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

Preview the production build locally:
```bash
npm run preview
```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be live at `https://im2rnado.github.io/click-and-trace/`

### Manual Deployment

```bash
npm run deploy
```

**Note**: Make sure GitHub Pages is configured to use **GitHub Actions** as the source in your repository settings.

## 🎓 About

This project was created as a **Mass Communication Graduation Project**. It combines modern web technologies with historical content to create an engaging educational experience about Ancient Egyptian cities.

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Im2rnado/click-and-trace/issues).

## 🙏 Acknowledgments

- Mapbox for mapping services
- Historical research on Ancient Egyptian cities
- Font: 29LT Makina by 29LT Type Foundry

## 📧 Contact

For questions or inquiries, please open an issue on GitHub.

---

Made with ❤️ for exploring Ancient Egyptian history
