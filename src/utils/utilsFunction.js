export function completeAddress(districtCity, subDistrict, village, nameStreet) {
  let address = ''
  if (districtCity) {
    address += `${districtCity}`
  }
  if (subDistrict) {
    address += `, ${subDistrict}`
  }
  if (village) {
    address += `, ${village}`
  }
  if (nameStreet) {
    address += `, ${nameStreet}`
  }
  return address
}
