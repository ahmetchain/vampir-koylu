// REST istemcisi (PROTOCOL §5). Token localStorage'da saklanır.
import { store } from './util.js';

export const SERVER = String((window.VK_CONFIG && window.VK_CONFIG.serverUrl) || '').replace(/\/$/, '');
const TOKEN_KEY = 'vk.token';

export const auth = {
  get token() { return store.get(TOKEN_KEY); },
  set token(v) { store.set(TOKEN_KEY, v || null); },
};

export class ApiError extends Error {
  constructor(message, status, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function api(path, { method = 'GET', body, token = auth.token, timeout = 15000 } = {}) {
  const headers = {};
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;
  const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const t = ctl ? setTimeout(() => ctl.abort(), timeout) : null;
  let res;
  try {
    res = await fetch(`${SERVER}/api${path}`, {
      method, headers, body: body === undefined ? undefined : JSON.stringify(body), signal: ctl && ctl.signal,
    });
  } catch {
    throw new ApiError('Sunucuya ulaşılamadı. İnternet bağlantını kontrol edip tekrar dene.', 0, 'network');
  } finally {
    if (t) clearTimeout(t);
  }
  let data = null;
  try { data = await res.json(); } catch { /* boş gövde */ }
  if (!res.ok || !data || data.ok === false) {
    let msg = (data && data.error) || 'Sunucuda bir hata oluştu, biraz sonra tekrar dene.';
    if (res.status === 429) {
      const after = Number(res.headers.get('Retry-After'));
      if (after > 0) msg += ` (${Math.ceil(after / 60)} dk)`;
    }
    throw new ApiError(msg, res.status, (data && data.code) || 'error');
  }
  return data;
}

export const Api = {
  register: (username, password) => api('/auth/register', { method: 'POST', body: { username, password }, token: null }),
  login: (username, password) => api('/auth/login', { method: 'POST', body: { username, password }, token: null }),
  logout: () => api('/auth/logout', { method: 'POST', body: {} }),
  me: () => api('/me'),
  saveLook: (look) => api('/me', { method: 'PATCH', body: { look } }),
  leaderboard: (limit = 20) => api(`/leaderboard?limit=${limit}`, { token: null }),
};
