# What is the difference between a dictionary in python, an object in Javascript and a json data when dealing with APIs
# Python Dictionary
# A Python data structure
# Stores data in key–value pairs
# Keys are usually strings
# Values can be any data type (string, number, list, another dictionary, etc.)
# Exists inside Python only

# JavaScript Object
# A JavaScript data structure
# Stores data in key–value pairs
# Very similar to a Python dictionary
# Values can be string, number, array, object, function, etc.
# Exists inside JavaScript only

# JSON (JavaScript Object Notation)
# A text format for sending data
# Used in APIs
# Looks like a JavaScript object
# But it is just a string
# Used to transfer data between backend and frontend

# How APIs Use Them
# Python creates a dictionary
# It converts it to JSON
# JSON is sent to the frontend
# JavaScript converts JSON into an object


age = 20
if age < 18:
    print("Program Guide: Not suitable for children under the age of 18")
else:
    print("Sit back, relax and enjoy...")


age = 41

if age < 18: 
    print("You are too young to watch this episode.")
elif age >= 15 and age <=18:
    print("You can watch this episode with parental guidance...")
elif age > 18 and age < 40:
    print("Have a seat and enjoy the episode")
else:
    print("This episode is not suitable for you.")