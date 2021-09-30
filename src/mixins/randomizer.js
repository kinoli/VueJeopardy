/* 2020-06 - ignore this file */

export default {
  data () {
    return {
      tests: [],
      timer: null,
      paused: false
    }
  },
  mounted () {
    this.generateTests()
  },
  methods: {
    randomInRange(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateTests () {
      // generate a randomized a list of 5-20 tests with a category
      this.tests = [...new Array(this.randomInRange(5,20))].map(()=>{
        return {
          remaining: this.randomInRange(200,700),
          category: this.randomInRange(1,2) > 1 ? 'frontend' : 'backend',
          status: `idle`,
          title: `lorem`
        }
      })
    },
    startTest(timerIntervalMS = 1){
      const states = [
        'pass',
        'fail',
        'dnf'
      ];

      // loop over tests, ticking down the 'remaining' property on each
      // when complete, set status to pass/fail/dnf
      this.timer = setInterval(() => {
        for (let i = 0; i < this.tests.length; i++) {
          const cur = this.tests[i];
          if (cur.remaining > 0) {
            cur.remaining -= 1;

            if (cur.remaining === 0) {
              cur.status = states[this.randomInRange(0, 2)];
              console.log(`task "${cur.title} completed w/ status "${cur.status}"`);
            }
          }
        }

        // sanity check the timer 
        if (this.tests.filter(({ status }) => status === 'idle').length === 0) {
          console.log('%c everything should be done, killing timer', 'color: #bada55');
          clearInterval(this.timer)
        }
      }, timerIntervalMS);
    },
    stopTest(){
      // stop all timers, regenerate tests
      if (this.timer) {
        clearInterval(this.timer);
      }

      this.generateTests();
    }
  },
}
