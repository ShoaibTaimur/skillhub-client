import { AuthContext } from '@/Context/AuthContext';
import React, { use } from 'react';

const Home = () => {
    const {user}=use(AuthContext);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;