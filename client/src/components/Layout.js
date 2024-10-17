import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "antd";
import { cleanUser } from "../redux/userSlice";

function Layout({ children }) {
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Inicio",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Mis Citas",
      path: "/appointments",
      icon: "ri-file-list-line",
    }
  ];

  const doctorMenu = [
    {
      name: "Inicio",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Mis Citas",
      path: "/doctor/appointments",
      icon: "ri-file-list-line",
    }
  ];

  const adminMenu = [
    {
      name: "Inicio",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Usuarios",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Medicos",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "Agregar Médico",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    }
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;
  const role = user?.isAdmin ? "Administrador" : user?.isDoctor ? "Medico" : "Paciente";
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1 className="logo">MediSync</h1>
            <h1 className="role">{role}</h1>
          </div>

          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                dispatch(cleanUser());
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-line"></i>
              {!collapsed && <Link to="/login">Salir</Link>}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            <div className="d-flex align-items-center justify-content-end px-4 w-100">
              <Badge
                count={user?.unseenNotifications.length}
                onClick={() => navigate("/notifications")}
              >
                <i className="ri-notification-line header-action-icon px-3"></i>
              </Badge>

              <Link className="anchor mx-2" to="">
                {user?.firstName}
              </Link>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
