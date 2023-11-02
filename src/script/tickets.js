import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";
// import Stripe from "stripe";
// Handeles Picked Day by user
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const hideLoader = function () {
  document.querySelector(".lazy-loader").classList.add("hidden-loader");
};
const picker = new Pikaday({
  field: document.getElementById("datepicker"),
  bound: false,
  defaultDate: tomorrow,
  setDefaultDate: true,
  minDate: today,
  onOpen: () => {
    hideLoader();
  },
});
//Handles Inputs min values
const kidsInputs = document.querySelectorAll("#kid-input");
const adultInput = document.querySelector("#adult-input");

const fixInput = function (input, minValue) {
  input.addEventListener("change", e => {
    if (e.target.value < minValue) {
      e.target.value = minValue;
    }
  });
};
kidsInputs.forEach(input => fixInput(input, 0));
fixInput(adultInput, 1);
//Handles Input - & + buttons & Total Price
export let TotalPrice = 35;
const totalPriceElement = document.querySelector(".ticket__total--price");
const InputsParnet = document.querySelector(".ticket__persons");
const updatePrice = function (priceToBeAdded) {
  TotalPrice += priceToBeAdded;
  totalPriceElement.textContent = TotalPrice;
};
InputsParnet.addEventListener("click", e => {
  let min = 0;
  let personPrice = 35;
  const inputContainer = e.target.closest(".person");
  const inputContainers = [...document.querySelectorAll(".person")];
  const index = inputContainers.indexOf(inputContainer);
  if (e.target.classList.contains("person__minest")) {
    const inputElement = e.target.nextElementSibling;
    if (index === 0) {
      min = 1;
      personPrice = 35;
    }
    if (index === 1) {
      personPrice = 20;
    }
    if (index === 2) {
      personPrice = 0;
    }
    if (inputElement.value > min) {
      inputElement.value--;

      updatePrice(-personPrice);
    }
  }
  if (e.target.classList.contains("person__plus")) {
    const inputElement = e.target.previousElementSibling;
    inputElement.value++;
    if (index === 0) {
      personPrice = 35;
      updatePrice(personPrice);
    }
    if (index === 1) {
      personPrice = 20;
      updatePrice(personPrice);
    }
    if (index === 1) {
      personPrice = 0;
      updatePrice(personPrice);
    }
  }
});
//Handles Members Form Submit and Payment
const ticketChoosingStep = document.querySelector(".tickets__bottom");
const paymentSTep = document.querySelector(".payment");
const ticketMembersForm = document.getElementById("ticket-members-form");

//Stripe
const stripeApi =
  "pk_test_51O6xToGO0uX1lkUYGeUfOo4Er1HVlK4qe6kODVByl4aIWwbl7lI0O0ZfzlFlmpn4eiKLJqa8ZATGv2mywYtgWW3n008O7XYPFf";

const stripe = Stripe(stripeApi);
const toPaymentButton = document.querySelector(".to-payment");
const toPaymentLoading = document.querySelector(".cta-loading");
ticketMembersForm.addEventListener("submit", async e => {
  e.preventDefault();

  const orderItems = [
    {
      price: "price_1O6yaKGO0uX1lkUYKFC0VoTZ",
      quantity: Number(adultInput.value),
    },
    {
      price: "price_1O6yacGO0uX1lkUYnhA7CcKV",
      quantity: Number([...kidsInputs][0].value),
    },
    {
      price: "price_1O6yaqGO0uX1lkUY1NpmQb21",
      quantity: Number([...kidsInputs][1].value),
    },
  ];

  const appearance = {
    theme: "flat",
    variables: { colorPrimaryText: "#87b139" },
  };
  const elements = stripe.elements({ appearance });
  const validLineItems = orderItems.filter(item => {
    return item.quantity > 0;
  });

  toPaymentButton.disabled = true;
  toPaymentLoading.classList.remove("hidden");
  const { error } = await stripe.redirectToCheckout({
    lineItems: validLineItems,
    mode: "payment",
    successUrl: "https://lionpark.netlify.app",
    cancelUrl: "https://lionpark.netlify.app/Tickets",
  });

  if (error) {
    console.error(error);
  }
  stripe.on("redirect_status", s => {
    toPaymentButton.disabled = false;
    toPaymentLoading.classList.add("hidden");
  });
});
