import {useEffect, useState} from "react";

export function useToast() {
    const [msg, setMsg] = useState('');


    return {
        msg,
        setMsg
    }
};
export function useToast() {
    const [msg, setMsg] = useState('');


    return {
        msg,
        setMsg
    }
};

export function ToastSucess({ msg, setMsg }) {
    useEffect (()=>{
        if(msg == '') return;

    }, [msg, setMsg]);

if (msg='') return;

    return (
        <div cassName='fixed top-0 left-5 w-sm bg-green-500 z-50'>
            {msg}
        </div>
    )
}

export function ToastDanger({ msg }) {

}

export function ToastWarning({ msg }) {

}
