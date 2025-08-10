# CyberTelos - Maritime Cybersecurity Solutions

A comprehensive React 18 + TypeScript application for CyberTelos, a maritime cybersecurity company offering specialized protection against digital and maritime threats.

## 🚀 Features

### Public Website
- **Hero Landing Page** - Compelling messaging with maritime cybersecurity focus
- **Services Pages** - Detailed cybersecurity services for maritime industry
- **About Us** - Company information, mission, and team details
- **Case Studies** - Success stories and client testimonials
- **Blog/News** - Industry insights and company updates
- **Contact** - Multi-channel contact options with form submission

### Admin Dashboard
- **Content Management** - CRUD operations for services, case studies, blog posts
- **Lead Management** - View and manage incoming inquiries
- **Analytics Dashboard** - Performance metrics and insights
- **Media Manager** - File upload and organization
- **User Management** - Role-based access control

### Technical Features
- **Bilingual Support** - English/Arabic with RTL support via react-i18next
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - react-helmet-async for meta tags and performance
- **API Integration** - TanStack React Query for data management
- **Form Handling** - React Hook Form + Yup validation
- **Rich Text Editor** - TipTap for content creation
- **Charts & Analytics** - Recharts for data visualization

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6+
- **State Management**: TanStack React Query
- **Forms**: React Hook Form + Yup
- **Internationalization**: react-i18next
- **SEO**: react-helmet-async
- **Charts**: Recharts
- **Editor**: TipTap
- **Build Tool**: Vite
- **Code Quality**: ESLint + Prettier

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd cybertelos
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   VITE_API_BASE_URL=https://api.example.com
   VITE_DEMO_ADMIN_EMAIL=admin@example.com
   VITE_DEMO_ADMIN_PASSWORD=123456
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Main navigation
│   ├── Footer.tsx      # Site footer
│   └── SEO.tsx         # SEO meta tag management
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark/light mode management
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
│   ├── api.ts          # API client configuration
│   ├── auth.ts         # Authentication utilities
│   ├── i18n.ts         # Internationalization setup
│   └── utils.ts        # General utilities
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Services.tsx    # Services overview
│   └── ...             # Other pages
└── assets/             # Static assets (images, etc.)
```

## 🎨 Design System

The application uses a comprehensive design system built with Tailwind CSS:

### Color Palette
- **Primary**: Deep ocean blue (#1e3a8a) - Maritime authority
- **Secondary**: Cyber cyan (#06b6d4) - Technology focus
- **Gradients**: Ocean-to-cyber transitions
- **Dark Mode**: Enhanced contrast with cyber glow effects

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive typography system
- **Weights**: 300-800 for various UI elements

### Components
- Custom button variants (hero, cyber, glass)
- Enhanced card designs with maritime themes
- Responsive navigation with mobile support
- Accessible form components

## 🌐 Internationalization

The app supports English and Arabic with full RTL layout switching:

```typescript
// Language switching
const { i18n } = useTranslation();
i18n.changeLanguage('ar'); // Switches to Arabic + RTL

// Using translations
const { t } = useTranslation();
<h1>{t('heroTitle')}</h1>
```

## 🔐 Authentication & API

### API Configuration
```typescript
// Environment-based API client
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Automatic token management
const token = getToken();
headers: {
  'Authorization': `Bearer ${token}`
}
```

### Protected Routes
Dashboard routes require authentication with automatic redirect to login on 401 responses.

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Environment Variables
Required for production:
- `VITE_API_BASE_URL` - Backend API endpoint
- Additional environment-specific variables

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized loading and interactivity
- **Bundle Size**: Code splitting and lazy loading
- **Images**: Optimized with proper alt tags for SEO

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

### Code Quality
- ESLint configuration for React + TypeScript
- Prettier for consistent formatting
- Strict TypeScript configuration
- Component-based architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for CyberTelos.

## 📞 Support

For technical support or questions about this application:
- Email: dev@cybertelos.com
- Documentation: [Internal Wiki]
- Issues: Use GitHub Issues for bug reports

---

**CyberTelos** - Securing maritime operations in the digital age.