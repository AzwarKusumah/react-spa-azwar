import React, { useContext } from "react";
import { MdLogout } from "react-icons/md";

import LocaleContext from "../../components/contexts/LocaleContext";
import AuthContext from "../contexts/AuthContext";

function LogoutButton() {
  const { auth } = useContext(AuthContext);
  const { locale } = useContext(LocaleContext);

  const onLogoutButtonHandler = () => {
    localStorage.removeItem("accessToken");
    window.location = "/";
  };
  return (
    <>
      {auth ? (
        <button
          className="btn"
          onClick={() => document.getElementById("lgt_btn").showModal()}
        >
          <MdLogout className="w-8 h-8" />
        </button>
      ) : (
        ""
      )}
      <dialog id="lgt_btn" className="modal">
        <div className="modal-box">
          {locale === "id" ? (
            <>
              <h3 className="font-bold text-lg">Konfirmasi</h3>
              <p className="py-4">Apakah anda yakin ingin logout?</p>
            </>
          ) : (
            <>
              <h3 className="font-bold text-lg">Confirmation</h3>
              <p className="py-4">Are you sure you want to logout?</p>
            </>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-secondary"
                onClick={onLogoutButtonHandler}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default LogoutButton;
