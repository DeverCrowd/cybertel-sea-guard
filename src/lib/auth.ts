// Authentication utilities
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Token management
export const getToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

export const setToken = (token: string): void => {
  localStorage.setItem('auth_token', token);
};

export const removeToken = (): void => {
  localStorage.removeItem('auth_token');
};

// User management
export const getUser = (): User | null => {
  const userStr = localStorage.getItem('auth_user');
  return userStr ? JSON.parse(userStr) : null;
};

export const setUser = (user: User): void => {
  localStorage.setItem('auth_user', JSON.stringify(user));
};

export const removeUser = (): void => {
  localStorage.removeItem('auth_user');
};

// Auth state
export const isAuthenticated = (): boolean => {
  return !!getToken() && !!getUser();
};

// Logout
export const logout = (): void => {
  removeToken();
  removeUser();
  window.location.href = '/dashboard/login';
};

// Check if user has permission
export const hasPermission = (requiredRole: 'admin' | 'editor'): boolean => {
  const user = getUser();
  if (!user) return false;
  
  if (requiredRole === 'editor') {
    return user.role === 'admin' || user.role === 'editor';
  }
  
  return user.role === 'admin';
};