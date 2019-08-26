import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <div>
        <ul>
           <Link to="/"><li>Home</li></Link> 
           <Link to="/about/"><li>About us</li></Link>
           <Link to="/page-2/"><li>Contact us</li></Link>
        </ul>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
