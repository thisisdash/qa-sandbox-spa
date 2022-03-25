export const saveData = (key: string, data: object) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export const getData = (key: string) => {
  try {
    const data = localStorage.getItem(key) || '';
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    return null;
  }
};
