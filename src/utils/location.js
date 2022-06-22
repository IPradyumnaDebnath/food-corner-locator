/**
 * Utility method to get distance between two location
 * @params
 * baseLocation object: object with latitude and longitude
 * currentLocation object: object with latitude and longitude
 * @returns distance between two location
 */

export const getDistance = (
  { latitude: baseLatitude, longitude: baseLongitude },
  { latitude: endLatitude, longitude: endLongitude }
) => {
  if (baseLatitude === endLatitude && baseLongitude === endLongitude) return 0;

  const radBaseLat = (Math.PI * baseLatitude) / 180;
  const radEndLat = (Math.PI * endLatitude) / 180;
  const theta = baseLongitude - endLongitude;
  const radTheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radBaseLat) * Math.sin(radEndLat) +
    Math.cos(radBaseLat) * Math.cos(radEndLat) * Math.cos(radTheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = (Math.acos(dist) * 180 * 60 * 1.1515 * 1.609344) / Math.PI;
  return dist.toFixed(1);
};
