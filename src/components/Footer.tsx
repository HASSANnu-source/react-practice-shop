import { House, Heart, FileMinus, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

type FooterProps = {
  page?: "home" | "wishlist" | "transaction" | "profile";
};

export const Footer = ({ page }: FooterProps) => {
  return (
    <div className="sticky bottom-0 flex p-3 bg-white justify-around z-20">
      <Link to="/" className="foooter-btn flex flex-col items-center">
        <House
          className={`${
            page === "home" ? "text-btn-primary" : "text-forground-light"
          }`}
        />
        <span
          className={`text-sm ${
            page === "home" ? "text-btn-primary" : "text-forground-light"
          }`}
        >
          Home
        </span>
      </Link>

      <Link
        to="/wishlist"
        className="foooter-btn flex flex-col items-center"
      >
        <Heart
          className={`${
            page === "wishlist" ? "text-btn-primary" : "text-forground-light"
          }`}
        />
        <span
          className={`text-sm ${
            page === "wishlist" ? "text-btn-primary" : "text-forground-light"
          }`}
        >
          Wishlist
        </span>
      </Link>

      <Link
        to="/transaction"
        className="foooter-btn flex flex-col items-center"
      >
        <FileMinus
          className={`${
            page === "transaction" ? "text-btn-primary" : "text-forground-light"
          }`}
        />
        <span
          className={`text-sm ${
            page === "transaction" ? "text-btn-primary" : "text-forground-light"
          }`}
        >
          Transaction
        </span>
      </Link>

      <Link
        to="/profile"
        className="foooter-btn flex flex-col items-center"
      >
        <CircleUserRound
          className={`${
            page === "profile" ? "text-btn-primary" : "text-forground-light"
          }`}
        />
        <span
          className={`text-sm ${
            page === "profile" ? "text-btn-primary" : "text-forground-light"
          }`}
        >
          Profile
        </span>
      </Link>
    </div>
  );
};
