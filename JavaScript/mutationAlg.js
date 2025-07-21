function mutation([arr1, arr2]) {
  arr1 = arr1.toLowerCase().split('');
  arr2 = arr2.toLowerCase().split('');

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      return false;
    }
  }
  return true;
}
