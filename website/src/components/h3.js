import React from 'react'
import PropTypes from 'prop-types'

const H3 = ({ children, style }) => (
  <h3
    style={{
      position: 'relative',
      paddingLeft: 20,
      color: '#3b3b3b',
      fontFamily: 'Lato',
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 15,
      ...style
    }}
  >
    <span 
      style={{
        position: 'absolute',
        left: 0, bottom: -15,
        width: 36,
        height: 6,
        backgroundColor: '#0B269C'
      }}
    ></span>
    {children}
  </h3>
)

H3.propTypes = {
  siteTitle: PropTypes.string,
}

H3.defaultProps = {
  siteTitle: ``,
}

export default H3