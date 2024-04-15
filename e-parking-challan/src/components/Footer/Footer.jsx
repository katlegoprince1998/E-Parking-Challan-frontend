import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="copyright-text">
          <span>
            Made with{" "}
            <span role="img" aria-label="red-heart">
              ❤️
            </span>{" "}
            by{" "}
            <span style={{ fontWeight: "600", margin: "0px 6px 0px 0px" }}>
              Group 4
            </span>
          </span>
          &copy; {new Date().getFullYear()} E-Parking-Challan
        </div>
      </footer>
    </>
  );
};