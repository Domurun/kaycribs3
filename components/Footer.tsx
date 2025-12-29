export default function Footer() {
  return (
    <footer className="w-full border-t mt-10">
      <div className="max-w-7xl mx-auto py-10 px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-lg text-green-600">KayCribs</h3>
          <p className="text-sm mt-2">
            Trusted real estate platform for buying, renting, and managing property with verified sellers and legal support.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Navigation</h4>
          <ul className="text-sm mt-2 space-y-2">
            <li>Browse Properties</li>
            <li>Legal Services</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <p className="text-sm mt-2">© {new Date().getFullYear()} KayCribs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
