let answer = "SHARD"
let user_submission = "ADIEU"

1. keep track of entries, i.e. [["shard"], ["trace"], ["oasis"], ["adieu"], ["light"], ["brook"]];
2. keep track of tries, 6 max
3. keep track of input
4. validate input - is5Letters?
   // function is5Letters(word) {
   // return word.length === 5
   // }
   // is5Letters(word);
5. if yes, isEnglishWord? make API call to dictionary
6. if yes, isAnswer? True? Winner!
   // function isAnswer(word) {
   // return word.includes(answer);
   // }

- special note: includes is case sensitive - feed includes one character at a time

7. if false, use .includes to see whether any letter in the word exists in answer at all (i.e. if answer = SHARD, user submits: CRYPT). if false, highlight all in gray, add entry to entries array, and update tries to 5.

- if includes returns true, begin position searching. highlight green if position matches in answer, and highlight yellow if word exists but in wrong position.
- s - [0] - a [0] // a exists in shard, highlight yellow
- h - [1] - d [1] // d does not exist in shard, highlight gray
- a - [2] - i [2] // i - gray
- r - [3] - e [3] // e - gray
- d - [4] - u [4] // u - gray
