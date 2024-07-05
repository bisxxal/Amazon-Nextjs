"use client"
import { supabase } from '@/lib/supabase/Product'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared' 

function SignIn() {
  return (
   <div className=' bg-white min-h-screen'>
    <div className=' mx-auto w-1/4 pt-10'>
     <Auth
    supabaseClient={supabase} 
    appearance={{ theme: ThemeSupa }}
    />
    </div>
   </div>
  )
}

export default SignIn