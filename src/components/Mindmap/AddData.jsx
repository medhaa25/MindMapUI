import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

function FormDialog({ open, handleClose }) {
  const [inputType, setInputType] = useState("Text");

  const handleButtonClick = (type) => {
    setInputType(type);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const renderFormFields = () => {
    switch (inputType) {
      case "Text":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <TextField label="Title" variant="outlined" required />

            <TextField
              label="Description"
              placeholder="Enter description"
              multiline
              required
            />
            <Box>
              <TextField
                fullWidth
                label="Read More/Source Link"
                variant="outlined"
              />
              <Typography sx={{ marginLeft: "1rem", fontSize: "12px" }}>
                The Source or Read More link user gets at the end of the message
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      case "PDF":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              margin: "1rem",
            }}
          >
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              endIcon={<CloudUploadIcon />}
              sx={{
                fontSize: "14px",
                minWidth: "120px",
              }}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
            <Box width="100%">
              <TextField
                fullWidth
                label="Read More/Source Link"
                variant="outlined"
              />
              <Typography
                fullWidth
                sx={{ marginLeft: "1rem", fontSize: "12px" }}
              >
                The Source or Read More link user gets at the end of the message
              </Typography>
            </Box>
          </Box>
        );
      case "EPUB":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              margin: "1rem",
            }}
          >
            <Button
              variant="contained"
              tabIndex={-1}
              endIcon={<CloudUploadIcon />}
              sx={{
                fontSize: "14px",
                minWidth: "120px",
              }}
            >
              Upload EPUB
              <input type="file" hidden accept=".epub" />
            </Button>
            <Box width="100%">
              <TextField
                fullWidth
                label="Read More/Source Link"
                variant="outlined"
              />
              <Typography
                fullWidth
                sx={{ marginLeft: "1rem", fontSize: "12px" }}
              >
                The Source or Read More link user gets at the end of the message
              </Typography>
            </Box>
          </Box>
        );
      case "Link":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              margin: "1rem",
            }}
          >
            <TextField fullWidth label="Link URL" variant="outlined" />
            <Box width="100%">
              <TextField
                fullWidth
                label="Read More/Source Link"
                variant="outlined"
              />
              <Typography
                fullWidth
                sx={{ marginLeft: "1rem", fontSize: "12px" }}
              >
                The Source or Read More link user gets at the end of the message
              </Typography>
            </Box>
          </Box>
        );
      case "CSV":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              margin: "1rem",
            }}
          >
            <Button
              variant="contained"
              tabIndex={-1}
              endIcon={<CloudUploadIcon />}
              sx={{
                fontSize: "14px",
                minWidth: "120px",
              }}
            >
              Upload CSV
              <input type="file" hidden accept=".csv" />
            </Button>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Please upload your CSV file in the following format: Download CSV.
              <br />
              Make sure the header is present
            </Typography>
            <Box width="100%">
              <TextField
                fullWidth
                label="Read More/Source Link"
                variant="outlined"
              />
              <Typography
                fullWidth
                sx={{ marginLeft: "1rem", fontSize: "12px" }}
              >
                The Source or Read More link user gets at the end of the message
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "800px",
          maxWidth: "90%",
          borderRadius: "1rem",
        },
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          console.log(Object.fromEntries(formData.entries()));
          handleClose();
        },
      }}
    >
      <DialogTitle>Add Data</DialogTitle>
      <Divider />
      <DialogContent>
        <Stack direction="row" spacing={2} sx={{ marginBottom: "4rem" }}>
          <Button
            variant={inputType === "Text" ? "contained" : "outlined"}
            onClick={() => handleButtonClick("Text")}
            sx={{ fontSize: "1rem", color: "black", border: "2px solid blue" }}
          >
            Text
          </Button>
          <Button
            variant={inputType === "PDF" ? "contained" : "outlined"}
            onClick={() => handleButtonClick("PDF")}
            sx={{ fontSize: "1rem", color: "black", border: "2px solid blue" }}
          >
            PDF
          </Button>
          <Button
            variant={inputType === "EPUB" ? "contained" : "outlined"}
            onClick={() => handleButtonClick("EPUB")}
            sx={{ fontSize: "1rem", color: "black", border: "2px solid blue" }}
          >
            EPUB
          </Button>
          <Button
            variant={inputType === "Link" ? "contained" : "outlined"}
            onClick={() => handleButtonClick("Link")}
            sx={{ fontSize: "1rem", color: "black", border: "2px solid blue" }}
          >
            Link
          </Button>
          <Button
            variant={inputType === "CSV" ? "contained" : "outlined"}
            onClick={() => handleButtonClick("CSV")}
            sx={{ fontSize: "1rem", color: "black", border: "2px solid blue" }}
          >
            CSV
          </Button>
        </Stack>
        {renderFormFields()}
      </DialogContent>
      <DialogActions sx={{ margin: "0 12px 12px 0" }}>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{ color: "red", border: "1px solid red" }}
        >
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default FormDialog;
