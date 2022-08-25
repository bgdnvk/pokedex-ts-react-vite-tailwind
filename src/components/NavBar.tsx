import { useState } from "react"
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    const Home = () => (
        <div> <h2>Home</h2> </div>
      )
      
      const Original3 = () => (
        <div> <h2>Original 3</h2> </div>
      )
      
      const Saved = () => (
        <div> <h2>Saved</h2> </div>
      )

      const [page, setPage] = useState('home')

  const toPage = (page: any) => (event: any) => {
    event.preventDefault()
    setPage(page)
  }

  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'o3') {
      return <Original3 />
    } else if (page === 'saved') {
      return <Saved />
    }
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <nav>
        {/* <a href="" onClick={toPage('home')} style={padding}>
          home
        </a>
        <a href="" onClick={toPage('o3')} style={padding}>
          original 3
        </a>
        <a href="" onClick={toPage('saved')} style={padding}>
          saved Pokemon
        </a> */}
        <Link to={"/savedpokemon"} style={padding}>Saved Pokemon</Link>
        <Link to={"/about"}style={padding}>About</Link>
      </nav>

      {/* {content()} */}
      <Outlet></Outlet>
    </div>
  )
}

export default NavBar