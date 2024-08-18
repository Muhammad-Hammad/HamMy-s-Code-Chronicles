# String

## Definition 

*A string is a sequence of characters, It is a linear data structure that is used to store a sequence of characters. It is usually represented as text. In most programming languages, they are immutable.*

## Operations on String

### 1. Create:

`const greetings = "Hello World";`

### 2. Insert: 
```
const greetings = "Hello World";
const newGreetings = greetings + "known as Earth"
```

### 3. Remove: (delete a part of string) 
```
let original = "Hello World";
let modified = original.replace("World", "");
```

### 4. Edit: (edit a part of string/substring)
```
let original = "Hello World";
let modified = original.replace("World", "Human!");
```

### 5. Getter:
```
let charAtIndex4 = "hello World".charAt(4) // Output: 'o'
```

### 6. Traverse:
```
let str = 'Hammad'
for(let i = 0; i< str.length; i++){
    console.log(str[i]);
}
/* output: 
H
A
M
M
A
D
*/
```

### 7. Reverse:
```
let str = "Hammad'
let reversed = str.split('').reverse().join(''); // Output: 'dammaH'
```

## Real-Life Applications of Strings

1. **Text Processing**: Strings are the backbone of text editors, search engines, and any application that requires manipulation of text.

2. **Data Serialization**: In web development, data is often serialized into string formats (like JSON) to be sent over the network.

3. **Command-line Arguments**: When you run a script or command, the arguments passed are often strings.

4. **Pattern Matching**: Regular expressions, which are strings that define search patterns, are heavily used in data validation and text processing.

5. **Authentication**: Strings are critical in storing and comparing usernames, passwords, and tokens.


