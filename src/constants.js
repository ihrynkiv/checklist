export const CHECK_LIST_TYPES = {
    STYLE: "Style",
    SOLUTION: "Solution",
    TESTS: "Tests",
}

export const CHECK_LIST = [
    { id: "0", name: "Variables named by what they contain", completedId: 0, type: CHECK_LIST_TYPES.STYLE},
    { id: "1", name: "Functions are named by what they actually do", completedId: 0, type: CHECK_LIST_TYPES.STYLE },
    { id: "3", name: "There are no commented code and console logs", completedId: 0, type: CHECK_LIST_TYPES.STYLE },
    { id: "2", name: "Filename is consistent with the component name", completedId: 0, type: CHECK_LIST_TYPES.STYLE },
    { id: "4", name: "Do not use reserved names in naming other entities", completedId: 0, type: CHECK_LIST_TYPES.STYLE },

    { id: "9", name: "There is no unnecessary code duplication", completedId: 0, type: CHECK_LIST_TYPES.SOLUTION },
    { id: "6", name: "Edge cases: All edge cases are covered. Errors are handled", completedId: 0, type: CHECK_LIST_TYPES.SOLUTION },
    { id: "8", name: "Backward compatibility: New code should work with old functionality", completedId: 0, type: CHECK_LIST_TYPES.SOLUTION },
    { id: "7", name: "Dependencies: How written code can influence other parts of the project", completedId: 0, type: CHECK_LIST_TYPES.SOLUTION },
    { id: "5", name: "PR is relevant to the story. You should understand how it solves the problem", completedId: 0, type: CHECK_LIST_TYPES.SOLUTION },

    { id: "10", name: "Tests for utils", completedId: 0, type: CHECK_LIST_TYPES.TESTS },
    { id: "11", name: "Tests for hooks", completedId: 0, type: CHECK_LIST_TYPES.TESTS },
    { id: "12", name: "Tests for store items (reducers, selectors, thunks)", completedId: 0, type: CHECK_LIST_TYPES.TESTS },
];

export const CHECK_STATES = {
    NONE: 'None',
    SUCCESS: 'Success',
    FAILED: 'Failed'
}

export const CHECK_STATE_ARR = [CHECK_STATES.NONE, CHECK_STATES.SUCCESS, CHECK_STATES.FAILED]