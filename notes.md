# Teach Snoopy
So we know that a class will have certain properties and methods, but what keeps track of what a given class can or can't do? What a class has or doesn't have? That is the job of the prototype.

JavaScript automatically defines the prototype for class with a constructor. For example, our Dog constructor ensures that the Dog prototype has a breed property. Remember, the Dog prototype keeps track of what Dog has, doesn't have, can, or can't do.

We know we can add methods to objects, and in line 7 we add the bark method to buddy. Hit run and you will see one "Woof" printed when buddy barks. Notice what happens when we try to get snoopy to bark in line 17 though. Even though snoopy is of the class Dog, he doesn't know how to bark because only buddy had bark added as a method.

//////

# How do Classes Help Us?
Classes are very important in object-oriented programming. This is because a class tells us helpful information about objects, and you can think of an object as a particular instance of a class.

For example, look at our Person class again in the console. We know that any Person will have a name and age, because they are in the constructor. This allows us to create a function like printPersonName, which will take a Person as an argument and print out their name. We know the function will work on any Person, because name is a valid property for that class.