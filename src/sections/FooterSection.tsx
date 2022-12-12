import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FooterSection: React.FC  = () => {
  return (
    <footer>
      <div className="socialmedia">
        <a href="https://facebook.com" title="facebook">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
        <a href="https://instagram.com" title="instagram">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a href="https://twitter.com" title="twitter">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="https://google.com" title="google">
          <FontAwesomeIcon icon={["fab", "google"]} />
        </a>
        <a href="https://linkedin.com" title="linkedin">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </div>  
      <div>© 2022 Fixxo. All Rights Reserved</div>
    </footer>
  )
}

export default FooterSection