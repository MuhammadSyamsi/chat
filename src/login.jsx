<<<<<<< Updated upstream
import { useState } from 'react'
import axios from 'axios'

export default function Login({ onLoginSuccess }) {
    const [input, setInput] = useState('') // menyimpan username/email
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        if (!input.trim()) return alert('Input tidak boleh kosong')

        try {
            setLoading(true)
            const res = await axios.post('http://localhost:3000/api/auth/login', {
                email: input, // kamu bisa sesuaikan ini untuk username/email
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

=======
import {
    LockClosedIcon,
    BanknotesIcon,
    ExclamationCircleIcon,
    UsersIcon,
    FolderOpenIcon
} from '@heroicons/react/24/outline';

export default function Login() {
>>>>>>> Stashed changes
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                Silahkan login dulu
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <LockClosedIcon className="mr-2 w-4" />
                    Lupa password
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <ExclamationCircleIcon className="mr-2 w-4" />
                    tunggakan
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <BanknotesIcon className="mr-2 w-4" />
                    pembayaran
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <UsersIcon className="mr-2 w-4" />
                    data santri
                </button>
                <button type="button" className="flex bg-gray-100 text-sm font-medium px-6 py-2 rounded-full hover:bg-green-200 transition">
                    <FolderOpenIcon className="mr-2 w-4" />
                    berkas santri
                </button>
            </div>
<<<<<<< Updated upstream

            <div className="flex flex-row items-center gap-2 p-3 mt-4">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder="Masukkan username atau email"
                    className="flex px-4 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none overflow-hidden text-md"
                />
                <button
                    onClick={handleLogin}
                    className="text-green-600 hover:text-green-700"
                    title="Kirim"
                    disabled={loading}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 
              59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
=======
            <div className="w-1/2 flex flex-row items-center gap-2 p-3 mt-4">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Masukkan username"
                    className="flex-grow px-4 py-4 outline-1 outline-neutral-400 rounded-2xl bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-md"
                    rows={1}
                />
>>>>>>> Stashed changes
            </div>
        </div>
    )
}
