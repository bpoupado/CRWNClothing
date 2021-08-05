import { createSelector } from "reselect";

const selectDirectorty = state => state.directory;

export const selectDirectortySections = createSelector(
    [selectDirectorty],
    directory => directory.sections
)