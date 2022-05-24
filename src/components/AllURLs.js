import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import AddUrl from "./AddUrl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AllURLs = (props) => {
  const { showAlert } = props;

  const context = useContext(NoteContext);
  const { notes, addNote, getNotes } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <AddUrl showAlert={showAlert} />

      <div className="container ">
        <h2 className=" text-center my-3">Your Links</h2>
        <div style={{ height: 400, width: "100%", marginBottom: "5rem" }}>
          <TableContainer component={Paper} variant="elevation">
            <Table
              sx={{ minWidth: 650 }}
              size="large"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Full URL</TableCell>
                  <TableCell align="left">Short URL</TableCell>
                  <TableCell align="left">Clicks</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notes.map((row, idx) => (
                  <TableRow key={idx + 1}>
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">
                      <a
                        href={`${row.full}`}
                        style={{ textDecoration: "none" }}
                      >
                        {row.full}
                      </a>
                    </TableCell>
                    <TableCell align="left">
                      <a
                        href={`https://shorten-url11.herokuapp.com/${row.short}`}
                        style={{ textDecoration: "none" }}
                      >
                        {row.short}{" "}
                      </a>
                    </TableCell>
                    <TableCell align="left">{row.clicks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default AllURLs;
