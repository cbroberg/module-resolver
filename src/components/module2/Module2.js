import React from 'react'

import Module1Exported from 'components/module1/Module1Exported'

const Module2 = ({name}) => (
    <div>
        {`Hi ${name} I am Module2`}
        <Module1Exported name="Martin" />
    </div>
)

export default Module2


