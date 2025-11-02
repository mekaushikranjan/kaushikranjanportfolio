# Kaushik Portfolio

A modern, minimal portfolio website built with Next.js, TypeScript, and Framer Motion. Features a clean design with light/dark theme support, smooth animations, and responsive layout.

## Features

- **Modern & Minimal Design** - Clean, elegant interface focused on showcasing work
- **Light & Dark Theme** - Seamless theme switching with smooth transitions
- **Smooth Animations** - Framer Motion powered animations and micro-interactions
- **Responsive Design** - Optimized for all devices and screen sizes
- **3D Transforms** - Subtle 3D effects and hover animations
- **Accessibility Optimized** - ARIA labels, semantic HTML, and keyboard navigation
- **Performance Optimized** - Fast loading with Next.js optimization
- **TypeScript** - Type-safe development experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── blogs/          # Blog listing page
│   ├── projects/       # Projects showcase page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── navigation.tsx  # Navigation component
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Theme toggle button
├── public/             # Static assets
└── ...config files
```

## Pages

- **Home** - Hero section with profile introduction
- **About** - Personal information, stats, and contact details
- **Projects** - Featured project showcase with case studies
- **Blogs** - Blog post listing with categories and metadata

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ }
}
```

### Content
- Update personal information in each page component
- Replace placeholder images with your own
- Modify project data in `app/projects/page.tsx`
- Update blog posts in `app/blogs/page.tsx`

### Animations
Customize animations in individual components using Framer Motion variants and transitions.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue on GitHub or contact [your-email@example.com](mailto:your-email@example.com).
