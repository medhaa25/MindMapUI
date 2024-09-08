import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Collapse,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Pagination from "@mui/material/Pagination";
import "./MindMap.scss";

function createData(data, source, type, created, actions) {
  return { data, source, type, created, actions };
}

const rows = [
  createData(
    "Do you work on WhatsApp? Yes, we do offer our services on WhatsApp!",
    "--",
    "TEXT",
    "8/3/2024",
    { edit: true, delete: true }
  ),
  createData(
    "Will the Startup Plan address the concern I mentioned earlier?",
    "--",
    "TEXT",
    "7/31/2024",
    { edit: true, delete: true }
  ),
  createData(
    "Will the Startup Plan address the concern I mentioned earlier?",
    "--",
    "TEXT",
    "7/31/2024",
    { edit: true, delete: true }
  ),
  createData(
    "Will the Startup Plan address the concern I mentioned earlier?",
    "--",
    "TEXT",
    "7/31/2024",
    { edit: true, delete: true }
  ),
  createData(
    "I want to test your chatbot but since it is not working I can't work on it for the time being also there is very less chance that it is working so I am writing this to test the collapsible feature of the table cell which can be helpful if I enter a larger amount of text.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "I want to test your chatbot but since it is not working I can't work on it for the time being also there is very less chance that it is working so I am writing this to test the collapsible feature of the table cell which can be helpful if I enter a larger amount of text.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "who are you My name is Bech! I am an AI chatbot and my job is to help you with any questions you may have about BeyondChats or our services.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "I want to test your chatbot but since it is not working I can't work on it for the time being also there is very less chance that it is working so I am writing this to test the collapsible feature of the table cell which can be helpful if I enter a larger amount of text.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "who are you My name is Bech! I am an AI chatbot and my job is to help you with any questions you may have about BeyondChats or our services.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "I want to test your chatbot but since it is not working I can't work on it for the time being also there is very less chance that it is working so I am writing this to test the collapsible feature of the table cell which can be helpful if I enter a larger amount of text.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "Can I integrate the chatbot on Instagram? Not yet but we are definitely working on providing Instagram integration very soon!  How important is this for your business? If we see enough demand, we will launch this much sooner!",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "How can I make the payment? We support credit cards, debit cards, prepaid cards, UPI, eMandate and international cards.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "How easy is it to integrate the chatbot into my website? You can integrate our chatbot faster than you can make tea! ",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
  createData(
    "How can the chatbot help in converting website visitors into leads? From the very second that a user comes to your website, BeyondChats tries to understand what the user wants, builds trust with the user on behalf of your business and slowly excites the users to buy your product / service. In the background, we generate lots of useful analytics for you to better understand your users.",
    "--",
    "TEXT",
    "3/28/2024",
    {
      edit: true,
      delete: true,
    }
  ),
];

export default function BasicTable() {
  const [expandedRows, setExpandedRows] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const wordLimit = 40;

  // Handle row expansion toggle
  const handleToggle = (index) => {
    const rowKey = `${currentPage}-${index}`;
    setExpandedRows((prevState) => ({
      ...prevState,
      [rowKey]: !prevState[rowKey],
    }));
  };

  // Check if the text exceeds the word limit
  const exceedsWordLimit = (text) => {
    return text.split(" ").length > wordLimit;
  };

  // Calculate the rows to display for the current page
  const displayedRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle page change
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Box className="box">
        <TableContainer
          component={Paper}
          className="table"
          variant="outlined"
          sx={{ maxHeight: "100%", overflow: "hidden" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  Data
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  Source
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  Type
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  Created
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRows.map((row, index) => {
                const rowKey = `${currentPage}-${index}`;
                return (
                  <TableRow key={rowKey}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "1rem", padding: "1rem" }}
                    >
                      <div>
                        <Collapse in={expandedRows[rowKey]} collapsedSize={50}>
                          {row.data}
                        </Collapse>
                        {exceedsWordLimit(row.data) && (
                          <Button
                            variant="text"
                            size="small"
                            onClick={() => handleToggle(index)}
                          >
                            {expandedRows[rowKey] ? "Show Less" : "Show More"}
                          </Button>
                        )}
                      </div>
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1rem" }}>
                      {row.source}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1rem" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: "1rem" }}
                      >
                        {row.type}
                      </Button>
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1rem" }}>
                      {row.created}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1rem" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 1,
                        }}
                      >
                        <IconButton aria-label="edit">
                          <EditIcon sx={{ color: "blue" }} />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ margin: "1rem", display: "flex", justifyContent: "center" }}>
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </>
  );
}
