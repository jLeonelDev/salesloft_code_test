const API = process.env.REACT_APP_API_URL || "";

function getPeopleRequest(currentPage) {
  const people = fetch(`${API}/people?page=${currentPage}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return people;
}

const exported_functions = {
    getPeopleRequest
};

export default exported_functions
