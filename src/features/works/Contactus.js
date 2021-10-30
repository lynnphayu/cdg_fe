import React, { useState } from 'react';

export function Contactus() {

    const intentions = [
        {
            title: "Build",
            des: "Help you build something"
        },
        {
            title: "Co-incubate",
            des: "Help you build something"
        },
        {
            title: "Customize",
            des: "Help you build something"
        },
        {
            title: "Organise",
            des: "Help you build something"
        }
    ]

    return <div className="py-16 md:p-16">
        <div className="flex justify-center text-3xl font-bold text-red-500">
            <p>Let's Have A Chat</p></div>
        <div className="flex flex-col sm:flex-row grid md:grid-cols-4 md:justify-center  md:py-8 md:px-24">
            {intentions.map(({ title, des }, i) => {
                return <div key={i} className={`${i !== intentions.length - 1 && `border-r-2`} p-4 py-4 w-auto sm:border-b-2 border-fuchsia-600`}>
                    <div>
                        <p className="text-2xl font-bold flex text-center flex-row justify-between">
                            <span>{title}</span>
                            <span className="text-center p-2 text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 12l-10-10v7h-14v6h14v7z" /></svg>
                            </span>
                        </p>
                        <div className="text-sm my-2">{des}</div>
                    </div>

                </div>
            })}
        </div>
    </div>
}
