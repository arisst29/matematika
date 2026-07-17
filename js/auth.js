// ── Mathematikus 11 — Auth modulis ──
// Valdo prisijungimą, registraciją ir komunikaciją su API

const API = 'https://api.31415.lt';

const Auth = {
  // ── Token valdymas ──
  getToken() {
    return localStorage.getItem('math_token');
  },

  setToken(token) {
    localStorage.setItem('math_token', token);
  },

  removeToken() {
    localStorage.removeItem('math_token');
    localStorage.removeItem('math_user');
  },

  getUser() {
    const data = localStorage.getItem('math_user');
    return data ? JSON.parse(data) : null;
  },

  setUser(user) {
    localStorage.setItem('math_user', JSON.stringify(user));
  },

  isLoggedIn() {
    return !!this.getToken();
  },

  // ── API kreipiniai ──
  async request(endpoint, options = {}) {
    const token = this.getToken();
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = 'Bearer ' + token;

    try {
      const res = await fetch(API + endpoint, { ...options, headers });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Serverio klaida');
      }
      return data;
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        throw new Error('Nepavyko prisijungti prie serverio');
      }
      throw err;
    }
  },

  // ── Registracija ──
  async register(username, password) {
    const data = await this.request('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    this.setToken(data.token);
    this.setUser(data.user);
    return data;
  },

  // ── Prisijungimas ──
  async login(username, password) {
    const data = await this.request('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    this.setToken(data.token);
    this.setUser(data.user);
    return data;
  },

  // ── Atsijungimas ──
  logout() {
    this.removeToken();
    window.location.reload();
  },

  // ── Profilis ──
  async getProfile() {
    const data = await this.request('/api/profile');
    this.setUser(data);
    return data;
  },

  // ── Rezultatų siuntimas ──
  async sendResult(result) {
    return await this.request('/api/results', {
      method: 'POST',
      body: JSON.stringify(result),
    });
  },

  // ── Lyderių lentelė ──
  async getLeaderboard() {
    return await this.request('/api/leaderboard');
  },

  // ── Slaptažodžio keitimas ──
  async changePassword(oldPassword, newPassword) {
    return await this.request('/api/change-password', {
      method: 'POST',
      body: JSON.stringify({ old_password: oldPassword, new_password: newPassword }),
    });
  },

  // ── Paskyros trynimas ──
  async deleteAccount() {
    const data = await this.request('/api/account', { method: 'DELETE' });
    this.removeToken();
    return data;
  },
};
