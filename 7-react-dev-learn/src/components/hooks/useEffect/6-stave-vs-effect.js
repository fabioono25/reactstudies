import { useEffect, useState } from "react";

export function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState("");

  console.log('before calling effect');
  useEffect(() => {
    console.log('inside effect')
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);
  // ...

  const fullName2 = firstName + " " + lastName;

  return (
    <form>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <h2>Full name (effect): {fullName}</h2>
      <h2>Full name (on rendering): {fullName2}</h2>
    </form>
  );
}
