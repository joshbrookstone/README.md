# Asynchronous Programming

## What is Asynchronous Programming?

  Asynchronous programming is when a unit of work is run separately from the main thread of the program and notifies the program of its completion.

## Asynchronous Callbacks

* JS leverages callbacks in order to deal with time consuming tasks

## A-synch video notes

* JS can only do one task at a time
* if a program is really big, we want it to not wait on a file to finish, but read it asynchronously
* so START reading a file, than keep going, whilst reading the file, call the first function when your done, but keep going
* My program wont be faster...but it will let my program do each program a little bit at a time. so if one file is big, it can keep reading it and than keep going without blocking the thread
* The order in which things finish and run are not guarenteed in asynch 
* You can nest requests so one can guarentee finish times of java threads
* We call this A synch flow control...