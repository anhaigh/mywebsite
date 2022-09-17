import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>This is the Navbar.  Use it to navigate the site.</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='about'><a>About</a></Link>
            <Link href='professionalgrowth'><a>Professional Growth</a></Link>
        </nav>
     );
}
 
export default Navbar;