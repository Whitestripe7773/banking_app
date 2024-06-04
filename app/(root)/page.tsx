import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Daniel' };

    return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                {/* Here we define the values for the vars */}
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest' }
                    subtext="Access and manage your account
                            and transactions efficiently."
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>
        </div>
    </section>
    )
}

export default Home