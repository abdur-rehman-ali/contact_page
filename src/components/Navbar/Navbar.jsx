import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.logo}`}>
        <img src="images/logo.png" alt="Logo Here" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
