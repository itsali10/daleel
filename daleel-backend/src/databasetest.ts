import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({
  path: path.resolve(__dirname, '..', '.env'),
});

import { createClient } from '@supabase/supabase-js';

// Test Supabase connection
async function testSupabaseConnection() {
  console.log('=== Testing Supabase Connection ===');
  
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase configuration. Please set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file.');
    console.log('');
    return;
  }

  console.log('   URL:', supabaseUrl);
  console.log('   Key:', supabaseKey.substring(0, 20) + '...');
  console.log('   Testing connection...');

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Test connection by checking auth (this is a lightweight operation)
    const { data: authData, error: authError } = await supabase.auth.getSession();
    
    // If auth check works or returns expected error (no session), connection is good
    if (authError && authError.message.includes('JWT')) {
      // JWT error means we're connected but no valid session (expected)
      console.log('✅ Supabase connection successful');
      console.log('   Connection verified via auth endpoint');
    } else if (!authError) {
      console.log('✅ Supabase connection successful');
      console.log('   Connection verified via auth endpoint');
    } else {
      // Try a simple REST call to verify the connection
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
      
      if (response.ok || response.status === 404) {
        // 404 is fine, it means the endpoint exists but no table specified
        console.log('✅ Supabase connection successful');
        console.log('   Connection verified via REST API');
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    }
  } catch (err) {
    console.error('❌ Supabase connection failed');
    if (err instanceof Error) {
      console.error('   Error:', err.message);
    } else {
      console.error('   Error:', err);
    }
  }
  console.log(''); // Add spacing
}

// Run test
async function runTest() {
  console.log('\n🔍 Testing Supabase Connection...\n');
  
  await testSupabaseConnection();
  
  console.log('=== Test Complete ===\n');
}

runTest();
