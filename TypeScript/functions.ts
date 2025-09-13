function abcd(name: string, cb: (value: string) => void) {
  cb(name);
}

abcd("Manan", (value) => {
  console.log(value);
});

// rest operator
function friends(...args: string[]) {
  console.log(args);
}

friends("messi", "meymar", "suarez");