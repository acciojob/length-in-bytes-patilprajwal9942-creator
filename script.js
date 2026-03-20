const byteSize = (str) => {
  return new Blob([str]).size;
};

// Do not change below
const str = prompt("Enter string:");
alert(byteSize(str));