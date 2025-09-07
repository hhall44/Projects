public class Store {
  // instance fields
  // these are the variables that every Store object will have
  public String productType;
  public int inventoryCount;
  public double inventoryPrice;
  
  // constructor method
  // this method runs when you make a new Store object, linked to main.java
  public Store(String product, int count, double price) {
    productType = product; // the instance field productType is set to the value of the parameter product
    inventoryCount = count;
    inventoryPrice = price;

  }
}