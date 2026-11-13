const SUPABASE_URL = "https://yehheffwgloegvmexqzy.supabase.co";

const SUPABASE_KEY = "আপনার sb_publishable Key এখানে বসান";

const { createClient } = supabase;

window.supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
