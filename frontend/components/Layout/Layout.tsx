import type { NextPage } from "next";
import Navbar from "./../Navbar/Navbar";
import SideDrawer from "./../SideDrawer/SideDrawer";
import PageContainer from "./../PageContainer/PageContainer";

type Props = {
  children: React.ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <SideDrawer>
        <PageContainer>
          <Navbar />
          <main>{children}</main>
        </PageContainer>
      </SideDrawer>
    </div>
  );
};

export default Layout;
