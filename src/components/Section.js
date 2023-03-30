export default class Section {
  constructor({ items, renderer }, container) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = container;
  }

  addItem(element) {
    const renderItem = this._renderer(element);
    this._container.prepend(renderItem);
  } 

  renderItems() {
    this._renderedItems.forEach((item) => {
      const renderItem = this._renderer(item);
      this._container.append(renderItem);
    });
  }
}
