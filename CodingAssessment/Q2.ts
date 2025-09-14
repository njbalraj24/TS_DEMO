/* A non-empty array A consisting of N integers is given. The array contains an odd number of elements, 
and each element of the array can be paired with another element that has the same value, except for one 
element that is left unpaired.
For example, in array A such that:
A[0] = 9 A[1] = 3 A[2] = 9 A[3] = 3 A[4] = 9 A[5] = 7 A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:
function solution(A: number[]): number;
that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the 
unpaired element.
For example, given array A such that:
A[0] = 9 A[1] = 3 A[2] = 9 A[3] = 3 A[4] = 9 A[5] = 7 A[6] = 9
the function should return 7, as explained in the example above.
Write an efficient algorithm for the following assumptions:
N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times. */

function solution1(A: number[]): number {
    let unpaired = 0;
    for (const num of A) {
        unpaired ^= num;  // XOR operation
    }
    return unpaired;
}
console.log(solution1([9,3,9,3,9,7,9])); //7

/* Explanation
The XOR operator (^) has special properties that solve this problem efficiently:
a⊕a=0 (XOR of a number with itself is 0)
a⊕0=a (XOR of a number with 0 is the number itself)
XOR is commutative and associative, so order doesn't matter.

Since every element except one appears an even number of times, the XOR of all elements cancels out all 
paired elements, leaving only the unpaired element. */

/* What is XOR? (Exclusive OR)
XOR is a bitwise operator represented by ^ in most programming languages.

It compares two bits (0 or 1) and follows these rules:

Bit 1	Bit 2	XOR Result
0	0	0
0	1	1
1	0	1
1	1	0
In other words, XOR returns 1 if the bits are different and 0 if they are the same. */

/* How the XOR Solution Finds the Unpaired Element
Given an array where every element except one occurs twice:
When you perform XOR on all elements, pairs cancel out because x ^ x = 0.
So, after XORing all elements, only the unpaired element remains. */