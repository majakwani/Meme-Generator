function Header(){
    return (<header>
        <nav className = "nav">
            <img className = "image" src = "react-logo.png" />
            <ul className = "nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
)}

function Footer(){
    return (
        <footer>
            <p>© 2022 Jakwani development. All rights reserved.</p>
        </footer>
    )
}

function MainContent(){
    return (
        <div>
            <h1>Reasons I am excited to learn React.</h1>
        <ol>
            <li>It's trending</li>
            <li>It's a greate library</li>
            <li>Maintained by Facebook.</li>
            <li>Higher paying Jobs.</li>
        </ol>
        </div>
    )
}

function Page(){
    return (
        <div>
        <Header />
        <MainContent />
        <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('.container')).render(<Page />)