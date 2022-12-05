import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FooterSection: React.FC  = () => {
  return (
    <footer>
      <div className="socialmedia">
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="https://google.com">
          <FontAwesomeIcon icon={["fab", "google"]} />
        </a>
        <a href="https://linkedin.com">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </div>  
      <div>© 2022 Fixxo. All Rights Reserved</div>
    </footer>
  )
}

export default FooterSection