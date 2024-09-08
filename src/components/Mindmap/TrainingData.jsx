import PropTypes from "prop-types";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function TrainingData({ open, close }) {
  const renderTable = () => (
    <Table
      sx={{
        minWidth: 650,
        marginTop: "1rem",
        minHeight: 400,
        border: "1px solid #ccc",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell align="left">Title</TableCell>
          <TableCell align="center">Type</TableCell>
          <TableCell align="center">Status</TableCell>
          <TableCell align="center">Added On</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} align="center">
            No Data Added for training
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  return (
    <Dialog
      open={open}
      onClose={close}
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
          close();
        },
      }}
    >
      <DialogTitle>Add Training Data</DialogTitle>
      <Divider />
      <DialogContent>
        {/* Add any form fields here */}
        {renderTable()}
      </DialogContent>
      <DialogActions sx={{ margin: "0 12px 12px 0" }}>
        <Button
          variant="outlined"
          onClick={close}
          sx={{ color: "red", border: "1px solid red" }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TrainingData.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default TrainingData;
