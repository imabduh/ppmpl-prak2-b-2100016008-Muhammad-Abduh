const Repository = require("./repository");
class Service {
  constructor() {
    this.repository = new Repository();
  }
  getAllItems() {
    return this.repository.getAllItems();
  }
  getItemById(id) {
    let item = this.primaryRepository.getItemById(id);
    if (!item) {
      item = this.secondaryRepository.getItemById(id);
    }
    if (!item) {
      throw new Error("Item not found in both repositories");
    }
    return item;
  }
  addItem(name) {
    const newItem = { id: this.repository.data.length + 1, name };
    return this.repository.addItem(newItem);
  }
  deleteItemById(id) {
    return this.primaryRepository.deleteItemById(id);
  }
}
module.exports = Service;
