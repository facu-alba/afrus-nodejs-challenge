import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListBuyersComponent = () => {
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        const fetchBuyers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/buyers');
                setBuyers(response.data);
            } catch (error) {
                console.error('Error al obtener los compradores:', error);
            }
        };

        fetchBuyers();
    }, []);

    if (buyers.length === 0) {
        return (<p>No hay compradores</p>);
    }
    
    return (
        <div>
            <h2>Lista de Compradores</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>ID</th>
                        <th>Tipo de ID</th>
                        <th>Fecha de Creación</th>
                    </tr>
                </thead>
                <tbody>
                    {buyers.map((buyer) => (
                        <tr key={buyer.id}>
                            <td>{buyer.name}</td>
                            <td>{buyer.lastname}</td>
                            <td>{buyer.id}</td>
                            <td>{buyer.type_id}</td>
                            <td>{new Date(buyer.created_at).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListBuyersComponent;