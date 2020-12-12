import Vue from "vue/dist/vue.esm";

export const store = Vue.observable({
  form: {
    step: 1,
    job: {
      companyName: null,
      companyWebsite: null,
      companyLogo: null,
      companyDescription: null,
      email: null,
      compensationRange: null,
      compensationType: null,
      description: null,
      headquarters: null,
      linkToApply: null,
      price: 199,
      basePrice: 199,
      remote: "Yes",
      title: null,
      yearsOfExperience: null,
      upsellType: "No, thanks"
    },
    cardName: null
  }
})

export const actions = {
  updateForm(input, value) {
    store.form.job[input] = value;

    let storedForm = this.openStorage();
    if (!storedForm) storedForm = {};

    storedForm[input] = value;
    this.saveStorage(storedForm);
  },

  openStorage() {
    return JSON.parse(localStorage.getItem('form'));
  },

  saveStorage(form) {
    localStorage.setItem("form", JSON.stringify(form));
  },

  formattedPrice() {
    const price = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(store.form.job.price);
    return price
  },
};
