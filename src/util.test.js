import { buildUrls, getPathname, isValidUrl, removeLeadingSlash } from "./util";
import { testInstances } from "./config";

test("hello is true for hello", () => {
  const hello = "hello";

  expect(hello).toEqual("hello");
});

test("buildUrls should build urls with a supplied name appended", () => {
  const name = "waybackmachine";
  const builtUrls = buildUrls(testInstances, name);
  const sampleExpected = "https://nitter.1d4.us/waybackmachine";

  expect(builtUrls.includes(sampleExpected)).toEqual(true);
});

test("buildUrls should return an empty array an empty array is supplied", () => {
  const name = "waybackmachine";
  const builtUrls = buildUrls([], name);

  expect(builtUrls).toEqual([]);
});

test("getPathname should get the pathname", () => {
  const url = "https://nitter.1d4.us/waybackmachine";
  const pathname = getPathname(url);

  expect(pathname).toEqual("/waybackmachine");
});


test("getPathname should return '' for garbage", () => {
  const url = "nitter.1d4.uswaybackmachine";
  const pathname = getPathname(url);

  expect(pathname).toEqual("");
});


test("isValidUrl should return false for a malformed URL", () => {
  const malformedUrl = "twitter.com/waybackmachine";
  const isValid = isValidUrl(malformedUrl);
  expect(isValid).toEqual(false);
});

test("isValidUrl accepts lame urls", () => {
  const lameUrl = "https://d";
  const isValid = isValidUrl(lameUrl);
  expect(isValid).toEqual(true);
});

test("isValidUrl accepts weird urls", () => {
  const weirdUrl = "https://twitter.com/https://sketchysite.com?ssn=5555";
  const isValid = isValidUrl(weirdUrl);
  expect(isValid).toEqual(true);
});

test("removeLeadingSlash removes the leading slash", () => {
  const leadingslashstring = "/waybackmachine";
  const chopped = removeLeadingSlash(leadingslashstring);
  expect(chopped).toEqual("waybackmachine");
});

test("removeLeadingSlash returns the full string if not lead by slash", () => {
  const string = "waybackmachine";
  const ignoredWithoutSlash = removeLeadingSlash(string);
  expect(ignoredWithoutSlash).toEqual(string);
})
