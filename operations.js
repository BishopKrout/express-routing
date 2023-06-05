exports.mean = function(nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
};

exports.median = function(nums) {
    nums.sort((a,b) => a - b);
    let mid = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

exports.mode = function(nums) {
    let freqMap = {};
    let maxFreq = 0;
    let mode;

    for (let num of nums) {
        if (freqMap[num]) {
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }

        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            mode = num;
        }
    }
    return mode;
};