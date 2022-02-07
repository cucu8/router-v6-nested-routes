import { Route, Routes } from "react-router-dom";
import AcilisResim from "./Pages/AcilisResim";
import BoilerScreen from "./Pages/BoilerScreen";
import ForecastOpt from "./Pages/ForecastOpt";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/Main";
import PowerBiEgt from "./Pages/PowerBiEgt";
import RadiatorScreen from "./Pages/RadiatorScreen";
import UygulamaEgt from "./Pages/UygulamaEgt";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AcilisResim />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />}>
          <Route path="forecastOpt" element={<ForecastOpt />}>
            <Route path="radiatorScreen" element={<RadiatorScreen />} />
            <Route path="boilerScreen" element={<BoilerScreen />} />
          </Route>
          <Route path="egitim/power-bi-egitimi" element={<PowerBiEgt />} />
          <Route path="egitim/uygulama-egitimi" element={<UygulamaEgt />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
