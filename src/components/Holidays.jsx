import Footer from "./Footer";
import Navbar from "./Nav";

const Holidays = () => {
  const holidays = [
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
    {
      title: "Summer Vacation 2024",
      duration: "1 Months",
      date: "10-04-2024",
    },
  ];
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          padding: "64px 0",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          You Holiday's
        </h1>

        <table width="100%">
          <thead>
            <tr
              style={{
                border: "10px solid red",
                background: "#ddd",
              }}
            >
              <th style={{ padding: "14px" }}>S.No.</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>

            {holidays.map(({ title, duration, date }, index) => (
              <tr
                key={index}
                style={{
                  textAlign: "center",
                }}
              >
                <td
                  style={{
                    padding: "14px",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  {index + 1}
                </td>
                <td style={{ borderBottom: "2px solid #ddd" }}>{title}</td>
                <td style={{ borderBottom: "2px solid #ddd" }}>{duration}</td>
                <td style={{ borderBottom: "2px solid #ddd" }}>{date}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Holidays;
