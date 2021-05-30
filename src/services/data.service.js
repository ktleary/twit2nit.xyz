import { testing, testInstances } from "../config";

const getInstanceData = async () => {
  const instanceData = testing ? testInstances : [];
};

export { getInstanceData };
