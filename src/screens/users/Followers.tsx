import { useOutletContext, useParams } from "react-router-dom";

interface IFollowerContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowerContext>();
  return (
    <>
      <h1>Here are followers of {nameOfMyUser}</h1>
    </>
  );
}

export default Followers;
