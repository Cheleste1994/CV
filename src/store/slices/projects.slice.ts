import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { fetchReq } from '../../common/request';

const URL_PROJECTS_JSON = 'src/assets/projects.json';

interface IProjectsArray {
  name: null | string;
  src: null | string;
  github: null | string;
}

export interface IProjects {
  projects: IProjectsArray[];
  count: number;
  length: number;
}

const initialState: IProjects = {
  projects: [
    {
      name: null,
      src: null,
      github: null,
    },
  ],
  length: 0,
  count: 0,
};

export const fetchProjects = createAsyncThunk('projects', async (): Promise<IProjectsArray[]> => {
  const response = await fetchReq<IProjectsArray[]>(URL_PROJECTS_JSON);
  return response;
});

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    incrementCount: (state) => ({
      ...state,
      count: state.count < state.length ? state.count + 1 : state.count,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => ({
      ...state,
      projects: [...action.payload],
      length: [...action.payload].length,
      count: [...action.payload].length > 0 ? 3 : 0,
    }));
  },
});

export const selectProjects = (state: RootState) => state.projects;

export const { incrementCount } = projectsSlice.actions;

export default projectsSlice.reducer;
