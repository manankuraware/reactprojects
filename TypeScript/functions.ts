function abcd(name: string, cb: (value: string) => void) {
  cb(name);
}

abcd("Manan", (value) => {
  console.log(value);
});
