import { getToken, logout } from './auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

// API client class
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const token = getToken();

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (response.status === 401) {
        logout();
        throw new Error('Unauthorized');
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  // Services endpoints
  async getServices() {
    return this.request('/api/services');
  }

  async createService(service: any) {
    return this.request('/api/services', {
      method: 'POST',
      body: JSON.stringify(service),
    });
  }

  async updateService(id: string, service: any) {
    return this.request(`/api/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(service),
    });
  }

  async deleteService(id: string) {
    return this.request(`/api/services/${id}`, {
      method: 'DELETE',
    });
  }

  // Case studies endpoints
  async getCaseStudies() {
    return this.request('/api/case-studies');
  }

  async createCaseStudy(caseStudy: any) {
    return this.request('/api/case-studies', {
      method: 'POST',
      body: JSON.stringify(caseStudy),
    });
  }

  async updateCaseStudy(id: string, caseStudy: any) {
    return this.request(`/api/case-studies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(caseStudy),
    });
  }

  async deleteCaseStudy(id: string) {
    return this.request(`/api/case-studies/${id}`, {
      method: 'DELETE',
    });
  }

  // Blog endpoints
  async getPosts() {
    return this.request('/api/posts');
  }

  async createPost(post: any) {
    return this.request('/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
    });
  }

  async updatePost(id: string, post: any) {
    return this.request(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
    });
  }

  async deletePost(id: string) {
    return this.request(`/api/posts/${id}`, {
      method: 'DELETE',
    });
  }

  // Testimonials endpoints
  async getTestimonials() {
    return this.request('/api/testimonials');
  }

  async createTestimonial(testimonial: any) {
    return this.request('/api/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonial),
    });
  }

  async updateTestimonial(id: string, testimonial: any) {
    return this.request(`/api/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(testimonial),
    });
  }

  async deleteTestimonial(id: string) {
    return this.request(`/api/testimonials/${id}`, {
      method: 'DELETE',
    });
  }

  // Leads endpoints
  async getLeads(filters?: any) {
    const params = filters ? `?${new URLSearchParams(filters)}` : '';
    return this.request(`/api/leads${params}`);
  }

  // Analytics endpoints
  async getAnalyticsOverview() {
    return this.request('/api/analytics/overview');
  }

  // Media endpoints
  async getUploadUrl() {
    return this.request('/api/media/upload-url');
  }

  // Contact form
  async submitContactForm(data: any) {
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);