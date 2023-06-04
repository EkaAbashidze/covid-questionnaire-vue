import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        hadCovid: '',
        hadAntibodyTest: false,
        antibodies: {
          testDate: '',
          number: 0
        },
        hadVaccine: false,
        vaccinationStage: '',
        nonFormalMeetings: '',
        numberOfDaysFromOffice: 0,
        whatAboutMeetingsInLive: '',
        opinionAboutUs: ''
      }
    }
  },
  mutations: {
    updateFirstName(state, value) {
      console.log('Updating firstName:', value);
      state.userData.firstName = value;
    },
    updateLastName(state, value) {
      console.log('Updating lastName:', value);
      state.userData.lastName = value;
    },
    updateEmail(state, value) {
      console.log('Updating email:', value);
      state.userData.email = value;
    },
  },
})

export default store;