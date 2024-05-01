import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const StateWithApiCall = () => {
  const [issues, setIssues] = useState([]);

  // this is not recommended, because we are mutating the state directly. Not recommended in React.
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then((response) => {
        console.log("returned in old way");
        return response.json();
      })
      .then((data) => setIssues(data));
  }, []);

  // recommended practice: use react-query. It handles the data fetching and caching for you.
  // it also handles the loading and error states.
  // it is called once, instead of using useEffect. Why? because react-query handles the caching for you.
  const { data } = useQuery({
    queryKey: "issues",
    queryFn: () =>
      fetch("https://api.github.com/repos/facebook/react/issues").then(
        (response) => {
          console.log("returned in new way");
          return response.json();
        }
      ),
  });

  // console.log("Data old way: ", issues);
  // console.log("Data new way: ", data);

  return <div></div>;
};

export default StateWithApiCall;
