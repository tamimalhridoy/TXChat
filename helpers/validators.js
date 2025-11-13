const emailValidator = (mail) => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let s1 = "Geeks@123";
  let s2 = "GeeksforGeeks";
  let s3 = "Geeks123";
  console.log(s1, regex.test(s1));
  console.log(s2, regex.test(s2));
  console.log(s3, regex.test(s3));
};
