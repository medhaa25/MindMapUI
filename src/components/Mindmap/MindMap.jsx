import "./MindMap.scss";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Table from "./Table";
import FormDialog from "./AddData";
import TrainingData from "./TrainingData";
import GroundTruth from "./GroundTruths";
function MindMap() {
  const [results, setResults] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [trainData, setTrainData] = useState(false);
  const [groundTruth, setGroundTruth] = useState(false);
  const handleChange = (event) => {
    setResults(event.target.value);
  };

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleTrainData = () => {
    setTrainData(true);
  };

  const handleTrainDataClose = () => {
    setTrainData(false);
  };

  const handleGroundTruth = () => {
    setGroundTruth(true);
  };

  const handleGroundClose = () => {
    setGroundTruth(false);
  };

  return (
    <section className="mind-map">
      <Stack direction="row" spacing={2} className="buttons">
        <Button variant="contained" onClick={handleClickOpen}>
          ADD DATA
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "red", width: "15rem" }}
          onClick={handleTrainData}
        >
          DATA TRAINING STATUS
        </Button>
        <Button
          variant="outlined"
          style={{ border: "1px solid red", color: "red" }}
          onClick={handleGroundTruth}
        >
          GROUND TRUTHS
        </Button>
      </Stack>
      <div className="search-stack">
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          size="small"
        />
        <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel id="demo-simple-select-label">Results</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={results}
            label="Results"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Search</Button>
      </div>
      <Table />
      <FormDialog open={dialogOpen} handleClose={handleClose} />
      <TrainingData open={trainData} close={handleTrainDataClose} />
      <GroundTruth open={groundTruth} close={handleGroundClose} />
    </section>
  );
}

export default MindMap;
