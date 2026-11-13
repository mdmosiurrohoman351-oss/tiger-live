const SUPABASE_URL = "https://yehheffwgloegvmexqzy.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_tOdDjkFgQmry_2PXk3vM8Q_KZjZTwhg";

if (window.supabase && window.supabase.createClient) {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}
