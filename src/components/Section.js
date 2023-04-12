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

  addItems(items) {
    items.forEach((item) => {
      const renderItem = this._renderer(item);
      this._container.append(renderItem);
    });
  }
}
