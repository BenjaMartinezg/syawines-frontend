import React from 'react'
import { Card } from 'antd'

const Tarjeta = ({ nombre, mail }) => 
    <Card
        title={nombre}
        style={{ width: 300, margin: 50 }}
    >
        <p>{mail}</p>

    </Card>

export default Tarjeta