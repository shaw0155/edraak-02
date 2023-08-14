import { useState, useEffect } from "react";
import { Anchor } from "antd";
import logo from "../imgs/logo.png";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      key: "home",
      href: "#home",
      title: "ACCEUIL",
    },
    {
      key: "techs",
      href: "#techs",
      title: "EDRAAK TECHNOLOGIES",
    },
    {
      key: "services",
      href: "#services",
      title: "SERVICES",
    },
    {
      key: "contact",
      href: "#contact",
      title: "CONTACT",
    },
  ];
  return (
    // <div className="navbar" ref={headerRef}>
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-logo-container">
          <img src={logo} alt="edraak logo" className="logo" />
        </a>
        <Anchor direction="horizontal" items={navItems} />

        {show ? (
          <MenuUnfoldOutlined
            className={"side-nav-icon close-icon"}
            onClick={() => setShow(!show)}
          />
        ) : (
          <MenuFoldOutlined
            className={"side-nav-icon "}
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      <Anchor
        direction="vertical"
        items={navItems}
        className={`side-nav  ${!show ? "hidden" : ""}  ${
          scrolled ? "scrolled" : ""
        }`}
        onClick={() => setShow(false)}
      />
    </>
  );
}
