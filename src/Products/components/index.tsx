import React, { useEffect, useState } from 'react';
import { getProducts } from '../../core/requests/productRequest';


const ProductComponent: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getProducts();
                setData(productsData);
            } catch (error) {
                console.error('Erro ao buscar informações da API:', error);
            }
        };

        fetchData();
    }, []);

    const productListItem = data.map((product: any) => (
        <li key={product.id}>{product.name}</li>
    ))

    return (
        <div className='col-12'>
            <h1 className='fw-bold'>Produtos</h1>   
            <ul>
                { productListItem }
            </ul>
        </div>
    );
};

export default ProductComponent;
