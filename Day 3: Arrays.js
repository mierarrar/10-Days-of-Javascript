function getSecondLargest(nums) {
    // Complete the function
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] != largest && nums[i] > secondLargest) {
            secondLargest = nums[i]
        }
    } return secondLargest;
}