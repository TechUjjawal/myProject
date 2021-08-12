import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const SignUp = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [studentList, setStudentList] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [Editdailogopen, setEditdailogopen] = useState(false);
  const [editid, seteditid] = useState("");
  const [Editfirstname, setEditfirstname] = useState("");
  const [Editmiddlename, setEditmiddlename] = useState("");
  const [Editlastname, setEditlastname] = useState("");
  const [Editemail, setEditemail] = useState("");
  const [Editpassword, setEditpassword] = useState("");
  const [Editphonenumber, setEditphonenumber] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const UpdatdUserDetails = (data) => {
    seteditid(data.id);
    setEditfirstname(data.firstname);
    setEditmiddlename(data.middlename);
    setEditlastname(data.lastname);
    setEditemail(data.email);
    setEditpassword(data.password);
    setEditphonenumber(data.phonenumber);
    setEditdailogopen(true);
  };
  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = () => {
    let url = "http://localhost:8000/api/users";
    axios.get(url).then(
      function (response) {
        console.log(response.data);
        setStudentList(response.data.data);
      },
      (error) => {
        console.log("error");
      }
    );
  };
  const SubmitQuery = () => {
    let url = "http://localhost:8000/api/users";
    axios
      .post(url, {
        firstname,
        middlename,
        lastname,
        email,
        password,
        phonenumber,
      })
      .then(
        (response) => {
          console.log(response.data);
          alert(response.data.message);
          getUsersList();
          setfirstname("");
          setmiddlename("");
          setlastname("");
          setemail("");
          setphonenumber("");
          setpassword("");
        },
        (error) => {}
      );
  };

  const DeleteUser = (user_id) => {
    let id = user_id;
    console.log("userID:::", id);
    let temp = {
      params: {
        id,
      },
    };
    let url = "http://localhost:8000/api/users";
    axios
      .delete(url, temp)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        getUsersList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UpdateSubmitQuery = (id) => {
    let temp = {
      id,
      firstname: Editfirstname,
      middlename: Editmiddlename,
      lastname: Editlastname,
      email: Editemail,
      password: Editpassword,
      phonenumber: Editphonenumber,
    };
    let url = "http://localhost:8000/api/users";
    axios.patch(url, temp).then(
      (response) => {
        console.log(response.data);
        alert(response.data.message);
        getUsersList();
        setEditdailogopen(false);
        setEditfirstname("");
        setEditmiddlename("");
        setEditlastname("");
        setEditemail("");
        setEditphonenumber("");
        setEditpassword("");
      },
      (error) => {}
    );
  };
  return (
    <div className="margin_from_Both_side">
      <div className="font-weight-bold" style={{ fontSize: "30px" }}>
        Student Form
      </div>

      <Grid container spacing={2} className="mt-2">
        <Grid item xs={3}>
          <TextField
            label="First Name"
            value={firstname}
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Middle Name"
            value={middlename}
            onChange={(e) => {
              setmiddlename(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Last Name"
            value={lastname}
            onChange={(e) => {
              setlastname(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Email Address"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Phone Number"
            value={phonenumber}
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2} className="mt-2">
          <Button variant="contained" color="primary" onClick={SubmitQuery}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      <div className="font-weight-bold mt-4 mb-2">List Of Students</div>
      <div className="mt-2 mb-5">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className="table_header" align="left">
                  ID
                </StyledTableCell>
                <StyledTableCell align="left" className="table_header">
                  First Name
                </StyledTableCell>
                <StyledTableCell align="left" className="table_header">
                  Middle Name
                </StyledTableCell>
                <StyledTableCell align="left" className="table_header">
                  Last Name
                </StyledTableCell>

                <StyledTableCell align="left" className="table_header">
                  Email
                </StyledTableCell>

                <StyledTableCell align="left" className="table_header">
                  Phone Number
                </StyledTableCell>
                <StyledTableCell align="left" className="table_header">
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? studentList.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : studentList
              ).map((row) => (
                <StyledTableRow>
                  <StyledTableCell align="left">{row.id}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.firstname}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.middlename}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>

                  <StyledTableCell align="left">
                    {row.phonenumber}
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    <div>
                      <span className="mr-2 cursor_pointer">
                        <i
                          class="fa fa-edit"
                          onClick={() => UpdatdUserDetails(row)}
                        ></i>
                      </span>
                      |
                      <span className="ml-2 cursor_pointer">
                        <i
                          class="fa fa-trash"
                          onClick={() => DeleteUser(row.id)}
                        ></i>
                      </span>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            true
            rowsPerPageOptions={false}
            component="div"
            count={studentList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>

      <Dialog
        open={Editdailogopen}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth="fullWidth"
      >
        <DialogTitle className="resumeheadline_dailog_title">
          Update User
          <span
            className="resume_heaadline_times_button float-right"
            onClick={() => {
              setEditdailogopen(false);
            }}
          >
            <i class="fa fa-times " aria-hidden="true"></i>{" "}
          </span>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} className="mt-2">
            <Grid item xs={3}>
              <TextField
                label="First Name"
                value={Editfirstname}
                onChange={(e) => {
                  setEditfirstname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Middle Name"
                value={Editmiddlename}
                onChange={(e) => {
                  setEditmiddlename(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Last Name"
                value={Editlastname}
                onChange={(e) => {
                  setEditlastname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Email Address"
                value={Editemail}
                onChange={(e) => {
                  setEditemail(e.target.value);
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="Password"
                value={Editpassword}
                onChange={(e) => {
                  setEditpassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Phone Number"
                value={Editphonenumber}
                onChange={(e) => {
                  setEditphonenumber(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2} className="mt-2"></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="resumeheadline_dailog_action">
          <Button
            className="resumeheadline_button"
            onClick={() => {
              setEditdailogopen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => UpdateSubmitQuery(editid)}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default SignUp;
