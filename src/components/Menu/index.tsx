import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul className='nav'>
        <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/posts">Post</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/posts/10">Post 10</Link></li>
      </ul>
    </nav>
  )
}