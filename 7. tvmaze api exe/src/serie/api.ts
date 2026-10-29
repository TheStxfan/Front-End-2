export const apiCall = async <T>(url: string): Promise<T> => {
  try {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error("cannot fetch data.");
    }
    const textResult = await result.text();
    if (!textResult) {
      throw new Error("cannot find a show with that id.");
    }

    const data = JSON.parse(textResult);
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error(String(e));
  }
};
