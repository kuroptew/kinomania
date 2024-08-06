import { ISelectObj } from "@/types";

export function createSelectObj(arr: string[]): ISelectObj[] {
  const result = arr.reduce<ISelectObj[]>((arrObj, item) => {
    const obj = { value: item, label: item };

    arrObj.push(obj);

    return arrObj;
  }, []);

  return result;
}
