class Boilerplate {
  constructor() {
    //call initScript function only if the player is seeing the boilerplate page
    if (window.location.href.indexOf('boilerplate') > -1) {
      this.initScript();
    }
  }

  initScript() {
    alert('its working')
  }
}

export default Boilerplate;
