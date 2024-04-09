import { handleGoogleLogin } from '@/lib/action';

import React from 'react';

async function LoginPage() {
    return (
        <div>
            <h1>Login page</h1>
            <form action={handleGoogleLogin}>
                <button>Login with Google</button>
            </form>
        </div>
    );
}

export default LoginPage;
