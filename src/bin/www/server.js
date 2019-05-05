// This is where server will listen app

// Importinng User Defined Module
import { app } from "../../app";

// App will run on this port
app.listen(8080 , err => {
  if (err) {
    console.log("Server Is Not Connected");
  } else {
    console.log("Server Is Connected");
  }
});
