import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is None and diameter is None:
            raise ValueError("Provide either radius or diameter.")
        if radius is not None and diameter is not None:
            raise ValueError("Provide only one value: radius OR diameter.")

        if radius is not None:
            if radius <= 0:
                raise ValueError("Radius must be positive.")
            self._radius = float(radius)
        else:
            if diameter <= 0:
                raise ValueError("Diameter must be positive.")
            self._radius = float(diameter) / 2

    @property
    def radius(self):
        return self._radius

    @property
    def diameter(self):
        return self._radius * 2

    def area(self):
        return math.pi * (self._radius ** 2)

    def __str__(self):
        return (
            f"Circle(radius={self.radius:.2f}, "
            f"diameter={self.diameter:.2f}, "
            f"area={self.area():.2f})"
        )

    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return math.isclose(self.radius, other.radius, rel_tol=1e-9)


if __name__ == "__main__":
    c1 = Circle(radius=5)
    c2 = Circle(diameter=8)
    c3 = Circle(radius=2)

    print(c1)
    print(c2)
    print(f"c1 area: {c1.area():.2f}")
    print(f"c2 radius: {c2.radius}")
    print(f"c1 diameter: {c1.diameter}")

    c4 = c1 + c2
    print(f"c1 + c2 = {c4}")

    print(f"c1 > c2 ? {c1 > c2}")
    print(f"c1 == c2 ? {c1 == c2}")

    circles = [c1, c2, c3, c4]
    circles.sort()
    print("Sorted circles:")
    for circle in circles:
        print(circle)
