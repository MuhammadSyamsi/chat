export default function Login() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                Silahkan login dulu
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    lupa password
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    laporan tunggakan
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    laporan PSB
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    pembayaran
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                    data santri
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                    berkas santri
                </span>
            </div>
            <div className="flex flex-row items-center gap-2 p-3 mt-4">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Masukkan username atau email"
                    className="flex px-4 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none overflow-hidden text-md"
                    rows={1}
                />
                <button
                    className="text-green-600 hover:text-green-700"
                    title="Kirim"
                >
                    {/* Ikon kirim pakai Unicode atau bisa ganti SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
