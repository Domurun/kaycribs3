export default function BuyerRegister() {
  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Buyer Registration</h2>

      <form className="space-y-3">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Phone" />
        <input className="input" placeholder="Address" />
        <input className="input" placeholder="Password" type="password" />

        <button className="w-full bg-green-600 text-white py-2 rounded-lg">
          Create Account
        </button>
      </form>
    </div>
  );
}
