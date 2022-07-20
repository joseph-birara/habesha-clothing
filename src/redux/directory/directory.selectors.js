import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const slectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);