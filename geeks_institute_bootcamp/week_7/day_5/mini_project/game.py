import random


class Game:
    def get_user_item(self):
        """Ask user for rock/paper/scissors with validation."""
        valid_items = {"rock", "paper", "scissors"}
        while True:
            user_item = input("Choose rock, paper, or scissors: ").strip().lower()
            if user_item in valid_items:
                return user_item
            print("Invalid choice. Please type: rock, paper, or scissors.")

    def get_computer_item(self):
        """Return random computer choice."""
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        """Return win/draw/loss from user perspective."""
        if user_item == computer_item:
            return "draw"

        winning_pairs = {
            ("rock", "scissors"),
            ("paper", "rock"),
            ("scissors", "paper"),
        }

        if (user_item, computer_item) in winning_pairs:
            return "win"
        return "loss"

    def play(self):
        """Play one round and return win/draw/loss."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        if result == "win":
            result_text = "You win!"
        elif result == "loss":
            result_text = "You lose!"
        else:
            result_text = "You drew!"

        print(
            f"You selected {user_item}. "
            f"The computer selected {computer_item}. "
            f"{result_text}"
        )
        return result
