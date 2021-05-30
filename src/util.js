const isValidUrl = url => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const buildUrls = (instances, name) =>
  instances.reduce(
    (agg, instance) => [...agg, instance.concat("/").concat(name)],
    []
  );

const randomListItem = list => Math.floor(Math.random() * list.length);
const getRandomListItem = list => list[randomListItem(list)];

const feelingLucky = instanceLinks => {
  const selectedInstanceLink = getRandomListItem(instanceLinks);
  document.location.href = selectedInstanceLink;
};

const getPathname = url => {
  try {
    const newUrl = new URL(url);
    return newUrl.pathname;
  } catch {
    return "";
  }
};

const removeLeadingSlash = pathname =>
  pathname.charAt(0) === "/" ? pathname.slice(1) : pathname;

export { buildUrls, feelingLucky, getPathname, isValidUrl, removeLeadingSlash };
