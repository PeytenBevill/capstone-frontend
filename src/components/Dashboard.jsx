import { useState, useEffect } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://capstone-backend-topaz.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>
        {data.map((x) => (
          <h2 key={x.id}>{x.email}</h2>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
