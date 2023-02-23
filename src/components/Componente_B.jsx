import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';



const ComponenteB = ({ contact }) => {

    const [conectado, setConectado] = useState(contact.Conectado);
    const toggleEstado=() =>{setConectado(!conectado)}
    return (
        <div>
            <h3>
            Nombre: {contact.Nombre}
            </h3>
            <h3>
            Apellido: {contact.Apellido}
            </h3>
            <h3>
            Email: {contact.Email}
            </h3>
            <h3>
            Estado: {conectado ? "Contacto En Línea":"Contacto No Disponible"}
            </h3>
            <button onClick={toggleEstado}>Cambiar estado</button>
        </div>
    );
};


ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
