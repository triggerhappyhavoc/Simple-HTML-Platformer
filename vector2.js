//TODO:
// 1. Up until now whenever we wanted to store a 2D vector we’d create an x variable and a 
// separate y variable. This bloated our code out a little

// 2. Add the following functions to your Vector2 object:
// · set (x, y) - pass in an x and a y argument to allow setting both 
// properties at the same time(DONE)

// · normalize() - normalizes the vector

// · add(v2) - add the input 2D vector to this vector

// · subtract(v2) - subtract the input 2D vector from this vector

// · multiplyScalar (num) - multiply this vector by the input number 

// 3. Add an Enemy object (copy the code from the Player object if you wish). Use whatever 
// image you like for the enemy.

// CHALLANGE
// 4. Add a Bullet object. Copy your collision detection function from your Asteroids
// game and see 
// if you can modify your code so that your player can shoot a bullet at your enemy (and the 
// enemy dies).

//initilising vector 2
var Vector2 = function()
{
    this.x = 0;
    this.y = 0;
};

Vector.prototype.playerVector2 = function()
{
    
}

//normalize it here
//then add or subtract input
//then times this according to the preset player speed (deltatime should be somewhere here)
