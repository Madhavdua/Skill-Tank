import React, { useContext } from 'react'
import myContext from '../CreateContext'

const Alert = (props) => {
    const c=useContext(myContext);
  return (
    <>
      {c.alert && <div className="alert alert-primary position-absolute " role="alert" style={{left:"40%", zIndex:1000}}>
        {c.msg}
      </div>}

    </>
  )
}

export default Alert