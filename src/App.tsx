import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import NotFound from "./pages/NotFound";
import '@/lib/i18n';

const queryClient = new QueryClient();

// Layout component for public pages
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

const App = () => {
  // Initialize helmet provider context with proper configuration
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
                <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
                <Route path="/about" element={<PublicLayout><div>About Coming Soon</div></PublicLayout>} />
                <Route path="/case-studies" element={<PublicLayout><div>Case Studies Coming Soon</div></PublicLayout>} />
                <Route path="/testimonials" element={<PublicLayout><div>Testimonials Coming Soon</div></PublicLayout>} />
                <Route path="/blog" element={<PublicLayout><div>Blog Coming Soon</div></PublicLayout>} />
                <Route path="/contact" element={<PublicLayout><div>Contact Coming Soon</div></PublicLayout>} />
                
                {/* Dashboard routes */}
                <Route path="/dashboard" element={<div>Dashboard Coming Soon</div>} />
                <Route path="/dashboard/login" element={<div>Login Coming Soon</div>} />
                
                {/* Catch-all route */}
                <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
