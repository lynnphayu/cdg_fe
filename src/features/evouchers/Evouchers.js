import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export function Evouchers() {
    //   const count = useSelector(selectCount);
    //   const dispatch = useDispatch();
    //   const [incrementAmount, setIncrementAmount] = useState('2');

    //   const incrementValue = Number(incrementAmount) || 0;
    const evouchers = [
        {
            "id": 6,
            "title": "$8",
            "description": "8 dollar coupon",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/300/200",
            "limit": 0,
            "gift_limit": 0,
            "amount": 7,
            "quantity": 12,
            "buy_type": "ONLY_ME",
            "payment_method_discount": {
                "id": 1,
                "payment_method": "VISA",
                "discount": 10
            }
        },
        {
            "id": 4,
            "title": "$8",
            "description": "8 dollar coupon",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/300/200",
            "limit": 0,
            "gift_limit": 0,
            "amount": 7,
            "quantity": 12,
            "buy_type": "ONLY_ME",
            "payment_method_discount": {
                "id": 1,
                "payment_method": "VISA",
                "discount": 10
            }
        },
        {
            "id": 3,
            "title": "$8",
            "description": "8 dollar coupon",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/300/200",
            "limit": 0,
            "gift_limit": 0,
            "amount": 7,
            "quantity": 12,
            "buy_type": "ONLY_ME",
            "payment_method_discount": {
                "id": 1,
                "payment_method": "VISA",
                "discount": 10
            }
        }
    ]

    return <div className="grid md:grid-flow-col md:grid-cols-4 sm:grid-flow-row sm:grid-rows-3">
        {evouchers.map(({ id, title, description, image, amount }) => {
            return <div key={id} className="relative z-10" onClick={() => { }}>
                <div className="absolute top-0 p-6 bg-gradient-to-b from-gray-700 w-full z-20">
                    <div className="text-white text-md">{description}</div>
                    <div className="text-white text-2xl my-2">{title}</div>
                    <div className="text-white text-md">{amount}</div>
                </div>
                <img className="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:z-0" src={image} />
            </div>
        })}
    </div>
}
