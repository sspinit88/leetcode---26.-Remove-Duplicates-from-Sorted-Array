/*
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
    The remaining elements of nums are not important as well as the size of nums.
    Return k.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

 

Constraints:

    1 <= nums.length <= 3 * 104
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 function removeDuplicates(nums) {
  // Если длина массива меньше или равна 1, возвращаем длину массива
  // If the length of the array is less than or equal to 1, return the length of the array
  if (nums.length <= 1) return nums.length;

  // Инициализируем указатель i
  // Initialize pointer i
  let i = 0;

  // Проходим по массиву с помощью указателя j
  // Iterate over the array using pointer j
  for (let j = 1; j < nums.length; j++) {
      // Если элементы nums[i] и nums[j] не равны, копируем значение nums[j] в nums[i + 1] и увеличиваем i
      // If nums[i] and nums[j] are not equal, copy the value of nums[j] to nums[i + 1] and increment i
      if (nums[j] != nums[i]) {
          nums[++i] = nums[j];
      }
  }

  // Возвращаем количество уникальных элементов
  // Return the number of unique elements
  return i + 1;
}
