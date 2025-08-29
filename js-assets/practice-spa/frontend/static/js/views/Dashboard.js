import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Welcome back, Dom</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ipsam repudiandae neque omnis hic nemo, ad consequatur, voluptatem iste ullam amet iusto expedita voluptas praesentium porro accusamus aut officia eos.</p>
        <p>
            <a href="/posts" data-link>View recent posts</a>
        <p>
        `;
  }
}
