import React from 'react'

const ExternalLinkIcon: React.FC = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
      <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon