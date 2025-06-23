import { useState } from 'react'
import axios from 'axios'

import {
    LockClosedIcon,
    BanknotesIcon,
    ExclamationCircleIcon,
    UsersIcon,
    FolderOpenIcon
} from '@heroicons/react/24/outline';

export default function Login({ onLoginSuccess }) {
    const [input, setInput] = useState('') // menyimpan username/email
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        if (!input.trim()) return alert('Input tidak boleh kosong')

        try {
            setLoading(true)
            const res = await axios.post('http://localhost:3000/api/auth/login', {
                username: input, // kamu bisa sesuaikan ini untuk username/email
                password: 'dummy' // placeholder jika nanti mau tambah password
            })

            localStorage.setItem('token', res.data.token)
            if (onLoginSuccess) onLoginSuccess()
        } catch (err) {
            alert(err.response?.data?.message || 'Login gagal')
        } finally {
            setLoading(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                Silahkan login dulu
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <LockClosedIcon className="text-yellow-600 mr-2 w-4" />
                    Lupa password
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <ExclamationCircleIcon className="text-red-500 mr-2 w-4" />
                    tunggakan
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <BanknotesIcon className="text-green-700 mr-2 w-4" />
                    pembayaran
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <UsersIcon className="text-blue-500 mr-2 w-4" />
                    data santri
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <FolderOpenIcon className="text-amber-500 mr-2 w-4" />
                    berkas santri
                </button>
            </div>
            <div className="w-4/5 flex flex-row items-center gap-2 p-3 mt-4">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    onKeyDown={handleKeyDown}
                    placeholder="Masukkan username"
                    className="flex-grow px-4 py-4 outline-1 outline-neutral-400 rounded-2xl bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-md"
                    rows={1}
                />
            </div>
        </div>
    )
}
