const SUPABASE_URL = "https://yehheffwgloegvmexqzy.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_tOdDjkFgQmry_2PXk3vM8Q_KZjZTwhg";

if (window.supabase && window.supabase.createClient) {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}

// TIGER LIVE Authentication System
window.tigerAuth = {
  // Google Gmail Login
  async googleLogin() {
    return await window.supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin
      }
    });
  },

  // Email and Password Login
  async emailLogin(email, password) {
    return await window.supabaseClient.auth.signInWithPassword({
      email: email.trim(),
      password: password
    });
  },

  // Create New Account
  async createAccount(email, password) {
    return await window.supabaseClient.auth.signUp({
      email: email.trim(),
      password: password
    });
  },

  // Forgot Password
  async forgotPassword(email) {
    return await window.supabaseClient.auth.resetPasswordForEmail(
      email.trim(),
      {
        redirectTo: window.location.origin
      }
    );
  },

  // Logout
  async logout() {
    return await window.supabaseClient.auth.signOut();
  },

  // Current User
  async getUser() {
    return await window.supabaseClient.auth.getUser();
  }
};
