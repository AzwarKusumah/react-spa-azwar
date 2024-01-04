import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/network-data";
import { ToastContainer, toast } from "react-toastify";

import useInput from "../../components/hooks/useInput";
import LocaleContext from "../../components/contexts/LocaleContext";

function RegisterPage() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onSubmitHandlerEvent = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Konfirmasi password tidak sesuai");
      return;
    }

    try {
      const result = await register({ name, email, password });

      if (!result.error) {
        toast.success("Akun berhasil dibuat", {
          onClose: () => navigate("/login"),
        });
      }
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <ToastContainer autoClose={1500} />
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={onSubmitHandlerEvent}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nama</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={onNameChange}
              placeholder="nama"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="email"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              placeholder="confirm password"
              className="input input-bordered"
              required
            />
            <label className="label">
              {locale === "id" ? (
                <>
                  <span>Sudah Punya akun?</span>
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login disini
                  </Link>
                </>
              ) : (
                <>
                  <span>Already have an account?</span>
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login here
                  </Link>
                </>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
