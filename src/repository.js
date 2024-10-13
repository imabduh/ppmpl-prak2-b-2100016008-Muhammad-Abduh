class Repository {
  constructor() {
    this.data = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
  }
  getAllItems() {
    return this.data;
  }
  getItemById(id) {
    return this.data.find((item) => item.id === id);
  }
  addItem(item) {
    this.data.push(item);
    return item;
  }
  deleteItemById(id) {
    const item = this.getItemById(id);
    if (item) {
      this.data.splice(this.data.indexOf(item), 1); 
      return true; 
    }
    return false; 
  }
}
module.exports = Repository;
