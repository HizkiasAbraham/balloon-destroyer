## Balloon distroyer game

[Ballon distroyer game](link_to_demo) is a mini computer game program that helps users test and improve their keyboard usage and speed.

##### How it works

Word characters are added to balloons that fall down from atmospher. Whenever a ballon with a letter(word character) is visible inside our canvas, user clicks the character value on keyboard and the ballon with character are destroyed. For each ballon destroy, user gets a score of additional 10. If it escapes beneath, there will be decrease in the number of lives for the session. Lives are number of chances atmost which the balloons escapes the player without destroying.

#### Tech stack

This app was developed using `html`, `css` and `javascript`. In addition, `webpack` was used to bundle the source code and generate static page out of it.

#### Some features

- Drawing balloons on canvas: The program takes list of balloon class objects and then loops over the balloons list to draw the most recent position of each balloon.

- Challenge: The pixel size for the canvas was very small (300x150), thus I had issue with rendering balloons with high quality.

- Solution: I added the pixel size and dimension of the canvas to have better look with good pixel resolution appealing to eye

Below is a snippet of code from repository
```javacript
 drawBalloons() {
    const { context, canvas } = this;
    const { height } = canvas;
    for (const balloon of this.balloons) {
      // Draw the balloon
      context.beginPath();
      context.fillStyle = BALLOON_FILL_COLOR;
      context.arc(balloon.x, balloon.y, BALLOON_RADIUS, 0, 2 * Math.PI);
      context.fill();

      // Draw the text value
      context.beginPath();
      context.font = BALLOON_TEXT_FONT;
      context.fillStyle = BALLOON_TEXT_FILL_COLOR;
      const textXPos = balloon.x - Math.ceil(BALLOON_RADIUS / 2);
      const textYPos = balloon.y + Math.ceil(BALLOON_RADIUS / 2);
      context.fillText(balloon.value, textXPos, textYPos);
      context.fill();
      balloon.drop(this.difficulty, height);
      if (balloon.isEscaped(height)) {
        if (!this.escaped.includes(balloon.id)) {
          this.escaped.push(balloon.id);
          this.lives--;
          this.setLivesAndScores();
        }
      }
    }
  }
```



