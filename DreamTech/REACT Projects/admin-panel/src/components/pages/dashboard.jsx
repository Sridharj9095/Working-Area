import React from "react";
import { Layout } from "antd";
import Sidenavbar from "../parts/sidenavbar";
import Header from "../parts/header";
import Footer from "../parts/footer";
import Content from "../parts/content";

const { Content: AntContent } = Layout;

const Dashboard = () => {
  return (
    <Layout className="min-vh-100">
      <Sidenavbar />
      <Layout>
        <Header />
        <AntContent>
          <Content />
        </AntContent>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
