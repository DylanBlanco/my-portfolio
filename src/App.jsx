import './Style.css'
import './App.css'
import Header from './Main_Components/Header'
import Navbar from './Main_Components/NavBar'

function App() {


    return (
        <>
            <div className='h-screen bg-gradient-to-r from-orange-100 to-orange-200'>
                <div className="container m-auto app-container">
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default App
