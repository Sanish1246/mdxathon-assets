//Creating an abstract view class to be extended by other views
export default class {
  constructor() {}

  //updating the page title
  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
