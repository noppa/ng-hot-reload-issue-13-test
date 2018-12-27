
class TestController {
  constructor() {
    console.log('Test controller')
  }
}

const template = `
  <div>Hello World!</div>
`

angular.module('app').component('test', {
  controller: TestController,
  template,
})
