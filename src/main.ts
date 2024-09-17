import { searchDBG } from "./array/search-in-rotated-sorted-array";
import { flatDBG } from "./js_core/flatten";
import { findAnagramsDBG } from "./string/find-anagrams";
import { isOneEditDistanceDBG } from "./string/is-one-edit-distance";
import { lengthOfLongestSubstringDBG } from "./string/longest-substring.string";
import { testValidPalindrome } from "./string/valid-palindrome";
import { EventEmitter } from 'node:events';
import './sort';
import { testSortingPerformance } from "./sort/utilities";

const largeArray = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 100000));

testSortingPerformance('sort', largeArray)

const t = [3,1,2].bubbleSort();

console.log(t)

//isOneEditDistanceDBG();