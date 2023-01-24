const wordToChecl = "rotator"

function isPalindrome(word) {
  let wordArray = word.split("")
  let reverseWordArray = wordArray.reverse()
  let reverseWord = reverseWordArray.join("")
  
  if (word === reverseWord) {
    return true
  }

  return false
}

console.log(isPalindrome(wordToChecl));
