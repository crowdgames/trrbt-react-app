import "../styles/Node.css";

function Node({ icon, name }: any) {
  return (
    <>
      <div className="layout">
        <div className="card">{icon}</div>
        <h5>{name}</h5>
      </div>
    </>
  );
}
export default Node;
