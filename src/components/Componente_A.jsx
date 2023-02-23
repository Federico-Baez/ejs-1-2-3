import React from 'react';
import { Contacto } from '../models/contacto.class';
import ComponenteB from './Componente_B';

const ComponenteA = () => {

    const defaultContact = new Contacto("Federico", "Baez", "fede@gmail.com", true);

    return (
        <div>
            <div>
                <h1>Tu contacto:</h1>
            </div>
            <ComponenteB contact={defaultContact}></ComponenteB>
        </div>
    );
};

export default ComponenteA;
