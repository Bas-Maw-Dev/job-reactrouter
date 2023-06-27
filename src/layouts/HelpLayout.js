import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">

    <h2>Website Help</h2>
    <p>Lorem Ipsum Erat nam at lectus urna duis convallis convallis tellus</p>

    <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
    </nav>

    <Outlet />

    </div>
  )
}
