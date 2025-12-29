let accessToken: string | null = null;

export const tokenStore = {
  get() {
    return accessToken;
  },
  set(token: string) {
    return (accessToken = token);
  },
  clear() {
    return (accessToken = null);
  },
};
