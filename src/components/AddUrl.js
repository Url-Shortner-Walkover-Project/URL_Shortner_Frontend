import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Button from "@mui/material/Button";

const AddUrl = (props) => {
  const context = useContext(NoteContext);
  const { addNote, getNotes } = context;

  const [note, setNote] = useState({ fullurl: "" });
  const [url, setUrl] = useState("");

  const handleClcik = (e) => {
    e.preventDefault();

    addNote(url);
    getNotes();
    props.showAlert("URL shorten Successfully", "success");
    setUrl("");
  };

  return (
    <>
      <div className="container my-3">
        <h1 className=" text-center my-3">Url Shortner</h1>

        <div className="mb-3">
          <form>
            <div className="mb-3">
              <TextField
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="fullUrl"
                label="Enter the URL"
                type="url"
                id="fullUrl"
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" onClick={handleClcik} variant="contained">
              Short URL
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUrl;
