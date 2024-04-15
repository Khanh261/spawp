import { NAVIGATIONS } from "@/constants/header";
import styles from "@/styles/Layout/header.module.scss";
import Link from "next/link";
import { useState } from "react";
import useTrans from "@/hooks/useTrans";
import { useRouter } from "next/router";
import Modal from "react-modal";
import MenuIcon from "@/assets/menu.svg";

const customStyles = {
  content: {
    top: "80px",
    left: "0",
    right: "auto",
    bottom: "auto",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    borderRadius: "0",
  },
};

const LANGUAGES = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "vi",
    name: "Tiếng Việt",
  },
];
const Header = () => {
  const trans = useTrans();
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.logo} src="/images/logo.svg" alt="logo" />
            <div className={styles.desktop}>
              <div className={styles.navigation}>
                {NAVIGATIONS.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <div>{trans.header[item.name]}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.mobile} onClick={openModal}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.navigationMobile}>
          {NAVIGATIONS.map((item) => (
            <Link onClick={closeModal} key={item.id} href={item.link}>
              <div>{trans.header[item.name]}</div>
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Header;
