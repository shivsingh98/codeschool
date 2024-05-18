import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const menus = [
    {
      lable: "Home",
      href: "/",
    },
    {
      lable: "Teachers",
      href: "/teachers",
    },
    {
      lable: "Holidays",
      href: "/holidays",
    },
    {
      lable: "Contact us",
      href: "/contact-us",
    },
  ];

  return (
    <>
      <nav
        className="sticky top-0 left-0 z-20"
        style={{
          display: "flex",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 48px",
          boxShadow: "0 8px 8px 0 rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src="images/logo.png" alt="logo" width="60px" />
          <h1 className="text-2xl font-bold">JustCoder</h1>
        </div>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "32px",
            // backgroundColor: "red",
          }}
        >
          {menus.map((menu) => {
            return (
              <li>
                <Link
                  to={menu.href}
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  {menu.lable}
                </Link>
              </li>
            );
          })}
          {/*
          <li>
            <Link
              to="/contact-us"
              className="contact-us-btn"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "18px",
                backgroundColor: "#2C4E80",
                padding: "7px 15px",
                fontWeight: 500,
                borderRadius: "5px",
              }}
            >
              Contact us
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
