// //define counter to help identify each li element
// let burgerCounter = 0
//axios to hit route to retrieve all groceries with button
document.getElementById("addBurger").addEventListener("click", (event) => {
  event.preventDefault();
  axios
    .post("/api/burgers", {
      burger_name: document.getElementById("burgerName").value,
      devoured: false,
    })
    .then(({ data }) => {
      // console.log(data)
      location.reload();
    })
    .catch((err) => console.error(err));
});

let eatBurger = (id) => {
  console.log("ping:", id);
  axios
    .put(`/api/burgers/${id}`, { devoured: true })
    .then(({ data }) => {
      console.log(data);
      location.reload();
    })
    .catch((err) => console.log(err));
};
