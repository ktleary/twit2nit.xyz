import { testing, testInstances } from "../config";

const getInstanceData = () => {
  if (testing) {
    return new Promise((resolve, reject) => {
      resolve(testInstances);
    });
  } else {
    return ["nitter.net"];
  }
};

export { getInstanceData };
