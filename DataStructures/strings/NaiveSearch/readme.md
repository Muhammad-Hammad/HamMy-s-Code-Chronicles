## Naive String Search Algorithm

### Step-by-Step Explanation

1. **Initial Setup:**
   - The function `naiveSearch` accepts two parameters:
     - `text`: The string in which you want to search.
     - `pattern`: The substring you are searching for.
   - The length of the `text` is stored in `n`, and the length of the `pattern` is stored in `m`.
   - An empty array `indexes` is initialized to store the indices where the pattern matches the text.

2. **Outer Loop (Text Traversal):**
   - The outer `for` loop starts with `i = 0` and runs until `i <= n - m`.
     - This loop slides the `pattern` over the `text` one character at a time, ensuring all possible positions are checked.
   - For each iteration, `i` is the starting index in the `text` where the `pattern` is compared.

3. **Inner Loop (Pattern Matching):**
   - The inner `for` loop iterates over the `pattern`, comparing it with the substring of the `text` starting at index `i`.
   - The loop variable `j` represents the current index in the `pattern`.
   - If `text[i + j]` does not match `pattern[j]`, the loop breaks, and the function moves to the next starting index `i`.

4. **Pattern Found:**
   - If the inner loop completes without breaking (i.e., `j === m`), the pattern matches the current substring of the `text`.
   - The starting index `i` is added to the `indexes` array.
   - A message is logged to the console indicating the pattern was found at index `i`.

5. **Return Result:**
   - After the outer loop finishes, the function returns the `indexes` array containing all the starting positions where the pattern was found in the text.
