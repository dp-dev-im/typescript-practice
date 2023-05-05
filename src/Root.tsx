import { Outlet, useSearchParams } from "react-router-dom";
import Head from "./Head";

function Root() {
  const [readSearchParms, setSearchParms] = useSearchParams();
  console.log(readSearchParms);
  return (
    <>
      <h1>Root</h1>
      <Head />
      <Outlet />
    </>
  );
}

export default Root;
