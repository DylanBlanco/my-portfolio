import './Style.css'
import './App.css'
import Header from './Main_Components/Header'
import Navbar from './Main_Components/NavBar'
import BackgroundParticles from './ScreenStyle/BackgroundParticles';

function App() {


    return (
        <>
            <div className="h-screen screen-style relative overflow-hidden">

                {/* <BackgroundParticles /> */}
                                
                {/* <canvas id="bgCanvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas> */}

                <div className="relative z-10 container m-auto app-container">
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default App
