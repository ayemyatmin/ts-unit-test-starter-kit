import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  applyShippingDiscount,
  calculateTotal,
  clearCart,
} from "../src/ecommerce";


describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  }); 

  
  it("should calculate price of all products", () => {
    // Arrange Act Assert

    // Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);

    // Act
    const sum = calculateTotal();

    // Assert
    expect(sum).toBe(540);
  });

  it("should add items to cart", () => {
    // Arrange
    let cart = {};
    
    // Act
    cart = addToCart("Soap", 2);

    // Assert
    expect(cart["Soap"]).toBe(2);

  });

  it("should apply a 10% discount on carts worth over 500", () => {
    // Arrange
    let cart = {};

    // Act
    cart = addToCart("Soap", 3);
    cart = addToCart("Shampoo", 3);

    // Assert
    expect(calculateTotal()).toBe(810);
  });

  it("should not apply a 10% discount on carts worth less 500", () => {
    // Arrange
    let cart = {};

    // Act
    cart = addToCart("Soap", 3);

    // Assert
    expect(calculateTotal()).toBe(300);
  });
});
