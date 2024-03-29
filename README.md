// The game is working and functional, only remains some Ui improvements //


1. Introduction:
The Simon game is a classic electronic memory game where players must replicate a sequence of colors or sounds generated by the game.

3. HTML Structure:
The HTML file defines the basic structure of the game.
It includes elements for the game buttons, title, level display, and the reset/end screen.

5. CSS Styling:
The CSS file styles the HTML elements, providing a visually appealing and responsive design.
Certain elements are initially hidden or displayed as needed during different phases of the game.


7. JavaScript Functionality:
The JavaScript code controls the game's logic and behavior.
It initializes variables, sets up event listeners, and defines functions for gameplay.


9. Gameplay Flow:
Clicking the "Start" button initiates the game, hiding unnecessary elements and displaying the game grid and level counter.
The game generates a random sequence of colors, representing the order for the player to follow.

11. Flicker Animation:
The FlickSequence function animates the flickering of the colored buttons in the sequence order.


13. User Interaction:
Players click on the colored buttons in an attempt to replicate the sequence generated by the game.


15. Game State Handling:
The Check function verifies if the player's sequence matches the generated sequence.
If correct, the game progresses to the next level; otherwise, it triggers a wrong sequence response.


17. Wrong Sequence Response:
The WrongStat function handles the scenario when the player makes a mistake, resetting the game and playing a sound effect.


19. Restart Feature:
The "Restart" button allows the player to reset the game after completing or failing a level.



21. Audio Effects:
Sound effects (bop and wrong) are triggered during gameplay to enhance the user experience.


23. Level Counter Display:
The level counter dynamically updates to reflect the current level of the game.
