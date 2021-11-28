import readline from "readline";

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = [];

io.on("line", (data) => {
  if (messages.length < 3) {
    messages.push(data);
  } else {
    console.log(messages);
    io.close();
  }
});
