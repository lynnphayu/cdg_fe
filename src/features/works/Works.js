import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';




export function Works() {
    // function useQuery() {
    //     return new URLSearchParams(useLocation().search);
    // }

    // let query = useQuery();
    // console.log(query.get("tags"))
    const location = useHistory().location;
    const { tags } = queryString.parse(location.search);
    const filter = tags.replace('-', '&')
    
    const icons = {
        web: "https://www.codigo.co/img/ui/ico-web.svg",
        system: "https://www.codigo.co/img/ui/ico-cms.svg",
        ui: "https://www.codigo.co/img/ui/ico-uiux.svg",
        mobile: "https://www.codigo.co/img/ui/ico-app.svg",
    }
    const evouchers = [
        {
            "id": 6,
            "title": "We Collect",
            "description": "8 dollar coupon",
            "category": "Food & Beverage",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/640/720",
            "col_span": 1,
            "platform": ['web', 'mobile', 'ui']
        },
        {
            "id": 4,
            "title": "KIWI Auto Marketplace",
            "description": "8 dollar coupon",
            "expiry_date": "2022-12-01",
            "category": "Banking & Finance",
            "image": "https://picsum.photos/1280/720",
            "col_span": 2,
            "platform": ['web', 'mobile']
        },
        {
            "id": 5,
            "title": "We Collect",
            "description": "8 dollar coupon",
            "category": "Retail & Entertainment",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/640/720",
            "col_span": 1,
            "platform": ['web', 'mobile']
        },
        {
            "id": 1,
            "title": "We Collect",
            "description": "8 dollar coupon",
            "category": "Healthcare",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/1280/720",
            "col_span": 2,
            "platform": ['web', 'mobile', 'system']
        },
        {
            "id": 7,
            "title": "We Collect",
            "description": "8 dollar coupon",
            "category": "Co-incubation",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/640/720",
            "col_span": 1,
            "platform": ['web', 'mobile', 'system']
        },
        {
            "id": 8,
            "title": "We Collect",
            "description": "8 dollar coupon",
            "category": "Banking & Finance",
            "expiry_date": "2022-12-01",
            "image": "https://picsum.photos/640/720",
            "col_span": 1,
            "platform": ['web', 'mobile', 'system', 'ui']
        },
    ]

    const filtered = filter === "All" ? evouchers : evouchers.filter(({ category }) => category === tags.replace('-', '&'))
    return <div className="flex flex-col sm:flex-row grid md:grid-cols-4">
        {
            filtered.map(({ id, title, category, image, amount, col_span, platform }) => {
                return <div key={id} className={`relative z-10 md:col-span-${col_span}`} onClick={() => { }}>
                    <div className="absolute top-0 p-6 w-full z-20">
                        {/* bg-gradient-to-b from-gray-700 */}
                        <div className="text-white text-md">{category}</div>
                        <div className="text-white text-2xl my-2">{title}</div>
                        <div className="text-white text-md">{amount}</div>
                    </div>
                    <img className="w-full h-96 object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:z-0 z-10" src={image} />
                    <div className=" absolute bottom-0 flex flex-row mx-8">
                        {platform.map((e) =>
                            <div className="w-8 h-8 p-2 my-8 mx-2 bg-auto bg-center content-center bg-white bg-no-repeat rounded-full">
                                <img className="h-4 m-auto" src={`${icons[`${e}`]}`} />
                            </div>
                        )}
                    </div>

                </div>
            })}
    </div>
}
