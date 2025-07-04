import './Style.css'
import './App.css'
import Header from './Main_Components/Header'
import Navbar from './Main_Components/NavBar'

function App() {


    return (
        <>
            <div className='h-screen screen-style'>
            {/* <div className='h-screen bg-[#1a1a1a]'> */}
            {/* <div className='h-screen bg-[#252524]'> */}
                <div className="container m-auto app-container">
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default App
