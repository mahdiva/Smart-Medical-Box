import "./App.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Days from "./components/Days";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  useEffect(() => {
    document.title = "Smart Medical Box";
  }, []);
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const [totalPills0, setTotalPills0] = useState(null);
  const [totalPills1, setTotalPills1] = useState(null);
  const [totalPills2, setTotalPills2] = useState(null);
  const [totalPills3, setTotalPills3] = useState(null);

  const [pillsToTake0, setPillsToTake0] = useState(null);
  const [pillsToTake1, setPillsToTake1] = useState(null);
  const [pillsToTake2, setPillsToTake2] = useState(null);
  const [pillsToTake3, setPillsToTake3] = useState(null);

  const [time0, setTime0] = useState(new Date());
  const [time1, setTime1] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const [time3, setTime3] = useState(new Date());

  const [days0, setDays0] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const [days1, setDays1] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const [days2, setDays2] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const [days3, setDays3] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const download = (filename, text) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const daysToBin = ({
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }) =>
    [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday].reduce(
      (a, v) => (v ? a + "1" : a + "0"),
      ""
    );
  const generateCSV = () => {
    const filename = "data.csv";
    let data = `Box,Total Number of Pills,Number of Pills to Take,Time, Days of the Week (Starting from Monday)\n`;
    data += `1,${totalPills0},${pillsToTake0},${time0.getHours()}:${time0.getMinutes()},${daysToBin(
      days0
    )}\n`;
    data += `2,${totalPills1},${pillsToTake1},${time1.getHours()}:${time1.getMinutes()},${daysToBin(
      days1
    )}\n`;
    data += `2,${totalPills2},${pillsToTake2},${time2.getHours()}:${time2.getMinutes()},${daysToBin(
      days2
    )}\n`;
    data += `3,${totalPills3},${pillsToTake3},${time3.getHours()}:${time3.getMinutes()},${daysToBin(
      days3
    )}\n`;

    download(filename, data);
  };

  return (
    <div className="App">
      <h1>Smart Medical Box</h1>
      <h3>Never Miss a Pill Again</h3>
      <Paper className={classes.root}>
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Box 1" />
          <Tab label="Box 2" />
          <Tab label="Box 3" />
          <Tab label="Box 4" />
        </Tabs>
      </Paper>
      <div className="form-container">
        <form noValidate autoComplete="off">
          {/********************* Tab 1 *********************/}
          <div
            className="TabContainer"
            style={{ display: `${tab === 0 ? "block" : "none"}` }}
          >
            <div className="input-container">
              <TextField
                value={totalPills0}
                onChange={(e) => setTotalPills0(e.target.value)}
                className="text-in"
                label="Total Number of Pills"
              />
            </div>
            <div className="input-container">
              <TextField
                value={pillsToTake0}
                onChange={(e) => setPillsToTake0(e.target.value)}
                className="text-in"
                label="Number of Pills to Take each time"
              />
            </div>
            <div className="input-container">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  className="timePicker"
                  showTodayButton
                  todayLabel="now"
                  label="Time"
                  value={time0}
                  minutesStep={1}
                  onChange={setTime0}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="input-container">
              <Days days={days0} setDays={setDays0}></Days>
            </div>
          </div>
          {/********************* Tab 2 *********************/}
          <div
            className="TabContainer"
            style={{ display: `${tab === 1 ? "block" : "none"}` }}
          >
            <div className="input-container">
              <TextField
                value={totalPills1}
                onChange={(e) => setTotalPills1(e.target.value)}
                className="text-in"
                label="Total Number of Pills"
              />
            </div>
            <div className="input-container">
              <TextField
                value={pillsToTake1}
                onChange={(e) => setPillsToTake1(e.target.value)}
                className="text-in"
                label="Number of Pills to Take each time"
              />
            </div>
            <div className="input-container">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  className="timePicker"
                  showTodayButton
                  todayLabel="now"
                  label="Time"
                  value={time1}
                  minutesStep={1}
                  onChange={setTime1}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="input-container">
              <Days days={days1} setDays={setDays1}></Days>
            </div>
          </div>
          {/********************* Tab 3 *********************/}
          <div
            className="TabContainer"
            style={{ display: `${tab === 2 ? "block" : "none"}` }}
          >
            <div className="input-container">
              <TextField
                value={totalPills2}
                onChange={(e) => setTotalPills2(e.target.value)}
                className="text-in"
                label="Total Number of Pills"
              />
            </div>
            <div className="input-container">
              <TextField
                value={pillsToTake2}
                onChange={(e) => setPillsToTake2(e.target.value)}
                className="text-in"
                label="Number of Pills to Take each time"
              />
            </div>
            <div className="input-container">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  className="timePicker"
                  showTodayButton
                  todayLabel="now"
                  label="Time"
                  value={time2}
                  minutesStep={1}
                  onChange={setTime2}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="input-container">
              <Days days={days2} setDays={setDays2}></Days>
            </div>
          </div>
          {/********************* Tab 4 *********************/}
          <div
            className="TabContainer"
            style={{ display: `${tab === 3 ? "block" : "none"}` }}
          >
            <div className="input-container">
              <TextField
                value={totalPills3}
                onChange={(e) => setTotalPills3(e.target.value)}
                className="text-in"
                label="Total Number of Pills"
              />
            </div>
            <div className="input-container">
              <TextField
                value={pillsToTake3}
                onChange={(e) => setPillsToTake3(e.target.value)}
                className="text-in"
                label="Number of Pills to Take each time"
              />
            </div>
            <div className="input-container">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  className="timePicker"
                  showTodayButton
                  todayLabel="now"
                  label="Time"
                  value={time3}
                  minutesStep={1}
                  onChange={setTime3}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="input-container">
              <Days days={days3} setDays={setDays3}></Days>
            </div>
          </div>
        </form>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => generateCSV("test.csv", "hello1, hello2,\nhi1, hi2")}
          startIcon={<SaveIcon />}
        >
          Download CSV
        </Button>
      </div>
    </div>
  );
}

export default App;
