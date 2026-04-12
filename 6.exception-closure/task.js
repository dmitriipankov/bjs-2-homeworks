function parseCount(count) {
  const result = Number.parseFloat(count);
  if (!result) {
    throw new Error("Невалидное значение");
  }
  return result;
}

function validateCount(count) {
  try {
    return parseCount(count);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    let p = (this.sideA + this.sideB + this.sideC) / 2;
    return Number(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}