import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const { name, img, price, ratings, ratingsCount, description, flavour } = useLoaderData();
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
            <figure><img className='h-full' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className='text-2xl text-green-600'>{price}</h3>
                <p className='font-bold text-orange-600'>Flavour: {flavour}</p>

                <p>{description}</p>

                <span className='font-bold me-5 '>Ratings: {ratings}</span>
                <span className='font-bold'>Total-ratings: {ratingsCount}</span>
                <div className="">
                    <Link to=''>
                        <button className="btn btn-primary">Order</button>
                    </Link>
                </div>




            </div>
        </div>
    );
};

export default ItemDetails;