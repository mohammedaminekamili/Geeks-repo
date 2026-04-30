from game import Game


def get_user_menu_choice():
    """Show menu once and return validated choice."""
    print("\nMenu:")
    print("(p) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")

    choice = input("Choose an option (p/s/q): ").strip().lower()
    if choice in {"p", "s", "q"}:
        return choice

    print("Invalid menu choice.")
    return None


def print_results(results):
    """Display final game summary."""
    print("\nGame Results:")
    print(f"Wins:   {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws:  {results['draw']}")
    print("\nThanks for playing!")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice is None:
            continue
        if choice == "p":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "s":
            print_results(results)
        elif choice == "q":
            print_results(results)
            break


if __name__ == "__main__":
    main()
