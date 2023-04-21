import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Note(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteNote(props.id)}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
}
