const getAngkaTerbesarKedua = (dataAngka) => {
  if (!Array.isArray(dataAngka)) {
    return "ini bukan array";
  } else if (dataAngka.length === 0) {
    return "array kosong";
  } else if (dataAngka.length === 1) {
    return `datanya cuma satu, nih angkanya ${dataAngka[0]}`;
  } else {
    const sortedUniqueData = Array.from(new Set(dataAngka)).sort(
      (a, b) => b - a
    );
    return sortedUniqueData[1];
  }
};

const dataAngka = [9, 9, 9, 7, 4, 3, 2, 2, 7];
const dataAngka2 = [];

console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 7
console.log(getAngkaTerbesarKedua(dataAngka2)); // Output: array kosong
console.log(getAngkaTerbesarKedua([1])); // Output: datanya cuma satu, nih angkanya 1
console.log(getAngkaTerbesarKedua(2)); // Output: ini bukan array
console.log(getAngkaTerbesarKedua()); // Output: ini bukan array
console.log(getAngkaTerbesarKedua("2")); // Output: ini bukan array
