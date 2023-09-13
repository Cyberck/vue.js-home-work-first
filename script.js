const app = {
  data() {
    return {
      title: 'DZ',
      count: '',
      colour: 'green',
      colourTwo: 'red',
      colourThree: 'orange',
      holder: 'Ukajite chto to',
      show: true,
      text: ''
    }
  }, 
  methods: {
    addCount() {
      this.count++
    }
  },
}

Vue.createApp(app).mount('#app')