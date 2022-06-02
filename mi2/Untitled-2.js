const template = document.querySelector(".template");
const phone_container = document.querySelector(".container_phone");

import { phones } from "./data.js";
phones.forEach(function (phone) {
  const listItem1 = template.content.firstElementChild.cloneNode(true);
  listItem1.querySelector("img").src = phone.img
  listItem1.querySelector(".body__text__sale").innerText = phone.discount;
  listItem1.querySelector(".body-card__title-link").innerText = phone.name;
  listItem1.querySelector(".price1").innerText = phone.price1;
  listItem1.querySelector(".price2").innerText = phone.price2;
  listItem1.querySelector(".button").innerText = phone.button;
  listItem1.querySelector(".search");
  phone_container.append(listItem1);
});

const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function filter() {
  const filterValue = input.value;
  const filterByName = (arrayElement) => {
    return arrayElement.name.includes(filterValue);
  };
  const filteredPhones = phones.filter(filterByName);
  phone_container.innerHTML = "";
  filteredPhones.forEach(function (phone) {
    const listItem1 = template.content.firstElementChild.cloneNode(true);
    listItem1.querySelector("img").src = phone.img
    listItem1.querySelector(".body__text__sale").innerText = phone.discount;
    listItem1.querySelector(".body-card__title-link").innerText = phone.name;
    listItem1.querySelector(".price1").innerText = phone.price1;
    listItem1.querySelector(".price2").innerText = phone.price2;
    listItem1.querySelector(".button").innerText = phone.button;
    listItem1.querySelector(".search");
    phone_container.append(listItem1);
  });
  console.log(filteredPhones)
};