import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 font-primary text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-lg text-gray-600">Siden finnes ikke.</p>
      <NavLink to="/" className="text-blue-600 underline hover:text-blue-800">
        Gå til forsiden
      </NavLink>
    </div>
  );
}
