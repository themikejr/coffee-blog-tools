import React, { useEffect } from "react"
//import CMS from 'netlify-cms'

// Now the registry is available via the CMS object.
//CMS.registerPreviewTemplate('my-template', MyTemplate)

const AdminIndex = ({ data, location }) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js';
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return <></>
}

export default AdminIndex
