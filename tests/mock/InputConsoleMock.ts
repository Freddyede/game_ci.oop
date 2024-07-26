import InputConsole from "../../src/InputConsole";

export let mockInput: jest.Mocked<InputConsole>;

beforeEach(() => {
    mockInput  = new InputConsole() as jest.Mocked<InputConsole>;
})
// test
afterAll(() => {
    mockInput.close();
});
