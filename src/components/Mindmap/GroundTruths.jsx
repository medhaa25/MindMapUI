import PropTypes from "prop-types";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
  DialogActions,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function GroundTruth({ open, close }) {
  const [secondDialogOpen, setSecondDialogOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const handleOpenSecondDialog = () => {
    setSecondDialogOpen(true);
  };

  const handleCloseSecondDialog = () => {
    setSecondDialogOpen(false);
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const isFormValid =
    formValues.field1 && formValues.field2 && formValues.field3;

  return (
    <>
      {/* First Dialog */}
      <Dialog
        open={open}
        onClose={close}
        PaperProps={{
          sx: {
            width: "500px",
            maxHeight: "250px",
            maxWidth: "90%",
            borderRadius: "1rem",
          },
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            close();
          },
        }}
      >
        <DialogTitle>Ground Truth Data</DialogTitle>
        <Divider />
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 1rem",
          }}
        >
          <Button
            fullWidth
            sx={{
              margin: "1rem 0",
              maxWidth: "100%",
            }}
            variant="outlined"
            onClick={handleOpenSecondDialog}
          >
            Add Ground Truth
          </Button>

          <Typography
            variant="body1"
            align="center"
            sx={{
              marginTop: "1rem",
            }}
          >
            No Ground Truths Added
          </Typography>
        </DialogContent>
      </Dialog>

      <Dialog
        open={secondDialogOpen}
        onClose={handleCloseSecondDialog}
        PaperProps={{
          sx: {
            width: "1000px",
            borderRadius: "1rem",
          },
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            console.log(formValues);
            handleCloseSecondDialog();
          },
        }}
      >
        <DialogTitle>Add Suggestion</DialogTitle>
        <Divider />
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem 1rem",
          }}
        >
          <TextField
            required
            label="Question"
            name="question"
            variant="outlined"
            value={formValues.question}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Answer"
            name="answer"
            variant="outlined"
            value={formValues.answer}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={4}
          />

          <FormControl fullWidth required>
            <InputLabel id="dropdown-label">Business Action</InputLabel>
            <Select
              labelId="dropdown-label"
              label="Select Option"
              name="field3"
              value={formValues.field3}
              onChange={handleChange}
            >
              <MenuItem value={"Option 1"}>No Action</MenuItem>
              <MenuItem value={"Option 2"}>Whatsapp Us</MenuItem>
              <MenuItem value={"Option 3"}>new action</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSecondDialog}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={!isFormValid}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

GroundTruth.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default GroundTruth;
