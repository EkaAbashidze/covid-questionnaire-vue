import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userData: {
        first_name: '',
        last_name: '',
        email: '',
        had_covid: '',
        had_antibody_test: null,
        covid_sickness_date: '',
        antibodies: {
          test_date: '',
          number: 0
        },
        had_vaccine: null,
        vaccination_stage: '',
        i_am_waiting: '',
        non_formal_meetings: '',
        number_of_days_from_office: 0,
        what_about_meetings_in_live: '',
        tell_us_your_opinion_about_us: ''
      }
    }
  },
  mutations: {
    updateUserData(state, data) {
      state.userData[data.property] = data.value;
      console.log('Updating :', state.userData);
    }
  },
})

export default store;