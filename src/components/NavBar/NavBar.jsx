import logo from "../../assets/icons/logoFinanciala.svg"
import {Link} from "react-router-dom"

const NavBar = ({ isLoggedIn }) => {
  return (
    <nav className="flex justify-around items-center shadow">
      <div className="">
          <img className="w-10 h-10" src={logo} alt="" />
      </div>
      <div className="hidden lg:flex flex-none">
        <ul className=" flex gap-6 p-5 text-sm font-medium">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a>
              ¿Cómo funciona?
            </a>
            </li>
          <li>
            <a href="#">Inversionistas</a>
          </li>
          <li>
            <a href="#">Compradores</a>
          </li>
          <li>
            <a href="#">Beneficios</a>
          </li>
          <li>
            <a href="#">Preguntas Frecuentes</a>
          </li>
        </ul>
      </div>

      <div className="flex-none">
        {!isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-gray-600">
              Ingresar
            </Link>
            <Link
              to="/register"
              className=" bg-[#396AD3] text-white font-inter text-sm py-2 px-3 rounded-md"
            >
              ¡Comienza hoy!
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                M
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Perfil</a>
              </li>
              <li>
                <a href="#">Ajustes</a>
              </li>
              <li>
                <a href="/logout">Cerrar Sesión</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
