import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuthData } from "../../store/selectors/auth";
import Header from "../Header";
import Calendar from "../Calendar";
import { getToken } from "../../utils/localstorage";
import "antd/dist/antd.css";
import "./styles.scss";

const App = () => {
  const [isToken, setIsToken] = useState(false);
  const { token } = useSelector(getAuthData);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();

      if (token === "undefined" || token === null) {
        setIsToken(false);
      } else {
        setIsToken(true);
      }
    };

    fetchToken();
  }, [token]);

  return (
    <div className="App">
      <Header isToken={isToken} />
      {isToken ? <Calendar /> : null}
    </div>
  );
};

export default App;
