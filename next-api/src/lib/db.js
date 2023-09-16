const { username, password } = process.env;

export const connectionSrt =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.ev3r36y.mongodb.net/productDB?retryWrites=true&w=majority";
