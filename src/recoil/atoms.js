import React from 'react'
import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: JSON.parse(localStorage.getItem('USER')) || null,
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet(newValue => {
                if (newValue) {
                    localStorage.setItem('USER', JSON.stringify(newValue));
                } else {
                    localStorage.removeItem('USER');
                }
            });
        },
    ],
});



export const isLoggedInState = atom({
    key: 'isLoggedInState',
    default: JSON.parse(localStorage.getItem('IS_LOGGED_IN')) || false,
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet(newValue => {
                localStorage.setItem('IS_LOGGED_IN', JSON.stringify(newValue));
            });
        },
    ],
})

