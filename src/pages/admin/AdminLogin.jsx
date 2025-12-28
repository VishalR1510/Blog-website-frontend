function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 p-6 border rounded">
        <h2 className="text-xl text-blackChinese mb-4">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
