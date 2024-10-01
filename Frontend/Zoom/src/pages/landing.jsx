import React from 'react'
import "../App.css"

export default function LandingPage() {
    return (
        <div class="landingPageContainer">

            <nav>
                <div class="logo">
                    <h2>Loyalty.</h2>
                </div>


                <div class="list">
                    <p>Join as Guest</p>
                    <a href='/Sign'><p>Resister</p></a>
                    <div role='button'>
                        <a href='/Auth'><p>Login</p></a>
                    </div>
                </div>

            </nav>

            <form action='/Auth' method='get'>
                <div class="landingMainContainer">

                    <div class="content">
                        <h1>Video Conferencing for you</h1>
                        <p><span style={{ color: "#FF9839", fontWeight: 'bold', fontSize: '2rem' }}>connect</span> with your friends and family</p>
                        <button>Get Started</button>
                    </div>

                    <div class="image">
                        <img src="/public/Image_LandingPage.png" alt="landingPageImage" />
                    </div>
                </div>
            </form >
        </div>
            

    )
}
