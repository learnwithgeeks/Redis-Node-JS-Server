// This is where server will listen app

import { app } from "../../app";

app.listen(8080 , err => {
  if (err) { console.log("Server Is Not Connected"); } else { console.log("Server Is Connected"); }
});
