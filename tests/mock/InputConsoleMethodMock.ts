import { mockInput } from "./InputConsoleMock";

const read = (str: string) => jest.spyOn(mockInput, 'read').mockResolvedValueOnce(str);

export const inputConsoleMock = {
    read: {
        first:() => read('1'),
        second:() => read('2')
    }
};
