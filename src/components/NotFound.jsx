const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/images/not-found.svg" width="300px" alt="" />
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "2rem",
          color: "#323232",
          fontWeight: 500,
        }}
      >
        404 | Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
