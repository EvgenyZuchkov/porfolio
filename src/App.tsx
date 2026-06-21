import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
        </div>
    )
}

export default App
