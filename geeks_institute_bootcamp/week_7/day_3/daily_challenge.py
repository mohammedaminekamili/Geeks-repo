from __future__ import annotations

from math import pi


class Circle:
    def __init__(self, radius: float | None = None, diameter: float | None = None) -> None:
        if radius is None and diameter is None:
            raise ValueError("Provide either radius or diameter.")
        if radius is not None and diameter is not None:
            raise ValueError("Provide only one of radius or diameter, not both.")

        if diameter is not None:
            radius = diameter / 2

        if radius is None or radius < 0:
            raise ValueError("Radius must be a non-negative number.")

        self._radius = float(radius)

    @property
    def radius(self) -> float:
        return self._radius

    @property
    def diameter(self) -> float:
        return self._radius * 2

    def area(self) -> float:
        return pi * (self._radius**2)

    def __str__(self) -> str:
        return (
            f"Circle(radius={self.radius:.2f}, "
            f"diameter={self.diameter:.2f}, "
            f"area={self.area():.2f})"
        )

    def __add__(self, other: Circle) -> Circle:
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other: Circle) -> bool:
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius


if __name__ == "__main__":
    c1 = Circle(radius=5)
    c2 = Circle(diameter=6)  # radius = 3

    print(c1)  # dunder method output
    print(c2)

    c3 = c1 + c2  # add two circles
    print("Added circle:", c3)

    print("c1 > c2:", c1 > c2)
    print("c1 == c2:", c1 == c2)

    circles = [c1, c2, c3, Circle(radius=1.5)]
    circles.sort()  # uses __lt__
    print("\nSorted circles:")
    for circle in circles:
        print(circle)
