'use client'

import { redirect } from 'next/navigation'
import {useAuth0} from "@auth0/auth0-react";

export default function Callback() {
    const { error } = useAuth0();
    if (error) {
        alert(error)
    } else {
        redirect('/')
    }
}

