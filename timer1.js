let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] <= 0 || Number.isNaN(args[i])) { // if negative or not a number, continue with the loop and code
    continue;
  }
  setTimeout(() => {
    console.log(args[i])
  process.stdout.write("\x07");
}, args[i] * 1000);
}
// run it in terminal outside of vsCode because it doesn't work here.
