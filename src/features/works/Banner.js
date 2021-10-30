import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import {
    setCategory,
    selectCategory
} from './workSlice';

export function Banner() {
    const history = useHistory()

    const intentions = [
        {
            title: "All",
        },
        {
            title: "Media",
        },
        {
            title: "Food \& Beverage",
        },
        {
            title: "Transport \& Logistics"
        },
        {
            title: "Banking \& Finance",
        },
        {
            title: "Co-incubation"
        },
        {
            title: "Healthcare"
        },
        {
            title: "Retail \& Entertainment"
        }
    ]


    return <div className="p-14 md:p-28 ">
        <div className="flex flex-col sm:flex-row grid md:grid-cols-5 justify-center">
            <div className="flex py-8 text-5xl font-bold col-span-3">
                <p>Here’s 5% of <br />
                    our published work.<br />
                    <span className=" text-red-500">See 100% of our power.</span>
                </p>
            </div>
            <div className="flex flex-col sm:flex-row grid md:grid-cols-4 justify-center pb-16 col-span-3">
                {intentions.map(({ title, des }, i) => {
                    return <div key={i} 
                        className="p-2 cursor-pointer" onClick={() => history.push("/works?tags=" + title.replace("&", '-')
                    )}>
                        <div>
                            <p className="text-l flex text-center flex-row">
                                <span>{title}</span>
                            </p>
                            <div className="text-md my-2">{des}</div>
                        </div>

                    </div>
                })}
            </div>
            <div className="col-span-1">

            </div>
        </div>
    </div>
}
