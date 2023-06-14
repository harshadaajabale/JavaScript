function isPalindrome(str) {
    const arrayValues = str.split('');
    const reverseArrayValues = arrayValues.reverse();
    
        // convert array to string
        const reverseString = reverseArrayValues.join('');
    
        if(string == reverseString) {
            console.log(`${str} is a Palindrome`);
        }
        else {
            console.log(`${str} is not a Palindrome`);
        }
    }
    
    isPalindrome("madam");
    isPalindrome("141");
    isPalindrome("sunday");
    isPalindrome("mom");
    isPalindrome("listen");
    isPalindrome("dad");