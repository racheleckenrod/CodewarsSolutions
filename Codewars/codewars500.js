// There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

// For some reason people choose a chair in the following way

// Find a place as far from other people as possible
// Find a place as close to exit as possible
// All chairs must be occupied before the first person will be served

// So it looks like this for 10 chairs and 10 patients

// Chairs	1	2	3	4	5	6	7	8	9	10
// Patients	1	7	5	8	3	9	4	6	10	2
// Your task is to find last patient's chair's number.

// Input: number of chairs N, an integer greater than 2.
// Output: a positive integer, the last patient's chair number.
// Have fun :)

// PREP
// Parameters:
// we are given N, a number of chairs set in a single row.
// Results:
// we are to return the number of the last chair to be filled. 
// People fill the chairs in the folowing way: 
// as far away from other people, and then the closest to the door (which is number 1)

// examples:
// the first one will always be first, then the next one at the end, then the middle, and closer to the door if it is tied...

// Pseudocode:
// After the third one goes in the middle of the first two, for the forth one... we will want to find out how many empty chairs there are between each number. I think using an array and having empty indexes would be a good way to approach this ... 
// but how to set up some looping check for the longest empty space... not sure...

// ultimately though, this isnt really a fill the empty seat, just put the numbers in order so the array starts out
// [1]
// [1,2]
// [1,3,2]  now, where to put 4 and how to tell the computer to do it... 
// [1, , , ,3, , , , ,2] there are 8 spaces, so 3 goes closer to the door..now it is easier to see that there is more space on the right, between 3 and 2 so 4 will go there. with 4 spaces, the one closer to the door is
// [1, , , ,3, ,4, , ,2]
// [1,3,4,2]
// next we place the 5... between the 1 and three and there is an odd number of spaces so it goes in the middle
// [1, ,5, ,3, ,4, , ,2]
// [1,5,3,4,2]

// and for 6: there is only two spaces between 4 and 2 so going closer to the door...
// [1, ,5, ,3, ,4,6, ,2]
// [1,5,3,4,6,2]

// now for 7... there are only one space spaces left so I think we go closest to the door... and will fill in the rest of the numbers from left to right.
// [1,7,5, ,3, ,4,6, ,2]

// [1,7,5,8,3, ,4,6, ,2]

// [1,7,5,8,3,9,4,6, ,2]

// [1,7,5,8,3,9,4,6,10,2]

// For another example and to find a pattern...

// we will use N = 15

// to start out, the array will go 

// [1, , , , , , , , , , , , , ,2]

// [1, , , , , , ,3, , , , , , ,2] thirteen spaces will give an exact middle for three- I suspect that the order of the numbers will differ based on even or odd....

// [1, , ,4, , , ,3, , , , , , ,2] because there is equal spacing on the odd number, we go with the left side of three for 4, and since there are 6 spaces, we need to invoke the closer to the door rule

// [1, , ,4, , , ,3, , ,5, , , ,2] now for five, it will be similar but on the right

// next with 6 and 7 we have 2 spaces that have three and will place them in the middle for each , starting closer to the door 

// [1, , ,4, ,6, ,3, , ,5, ,7, ,2]  now we have two more to fill with 8 and 9 where we have two space spaces going closer to the door each time:

//  [1,8, ,4, ,6, ,3,9, ,5, ,7, ,2]  this gives us just one space spaces left and will fill them in starting from the door:

//  [1,8,10,4,11,6,12,3,9,13,5,14,7,15,2]. as I suspected, the last "chair" is at N-2 (being zero indexed) I think it is worth a shot to write the program to return N-2 for the position of the last chair... I guess I'll need to take into consideration if N=0, N=1, N=2... I guess I could go with N > 2 rereading the givens... we are given only a number greater than two so I guess this wont be a problem and.... I see that it will actually be N - 1 because they are asking for a "chair" starting at 1 NOT 0 



function lastChair(N){
    return N-1
  }