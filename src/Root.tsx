import { Outlet } from "react-router-dom";
import Head from "./Head";

function Root() {
  return (
    <>
      <h1>Root</h1>
      <Head />
      <Outlet />
    </>
  );
}

export default Root;
