import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        # Handle default items
        self.items = items if items is not None else []
        self.page_size = int(page_size)  # type casting
        self.current_idx = 0  # page index (starts at 0)

        # Total pages
        self.total_pages = math.ceil(len(self.items) / self.page_size) if self.page_size > 0 else 0

    # Get visible items on current page
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    # Go to specific page (1-based input)
    def go_to_page(self, page_num):
        page_num = int(page_num)

        if page_num < 1 or page_num > self.total_pages:
            raise ValueError(
                f"Page {page_num} is out of range.\n"
                f"La page {page_num} est invalide.\n"
                f"Page {page_num} kharja 3la range!"
            )

        self.current_idx = page_num - 1
        return self  # chaining

    # Go to first page
    def first_page(self):
        self.current_idx = 0
        return self

    # Go to last page
    def last_page(self):
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        return self

    # Next page
    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    # Previous page
    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    # String representation
    def __str__(self):
        visible = self.get_visible_items()
        return "\n".join(str(item) for item in visible)


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

# First page
print("Page 1:")
print(p)

# Method chaining
print("\nNext Page:")
print(p.next_page())

print("\nGo to Page 3:")
print(p.go_to_page(3))

print("\nLast Page:")
print(p.last_page())

print("\nPrevious Page:")
print(p.previous_page())