import { MainFooter, MainHeader } from "../components";
import Routers from "../routers/Routers";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <div
        style={{
          position: "relative",
          top: "155px",
        }}
      >
        <Routers />
      </div>
      <MainFooter />
    </>
  );
};

export default MainLayout;
