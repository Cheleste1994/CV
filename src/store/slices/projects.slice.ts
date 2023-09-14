import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { fetchReq } from '../../common/request';

const URL_PROJECTS_JSON = 'src/assets/projects.json';

export interface IProjects {
  name: null | string;
  src: null | string;
  github: null | string;
}

const initialState: IProjects[] = [
  {
    name: null,
    src: null,
    github: null,
  },
];

export const fetchProjects = createAsyncThunk('projects', async (): Promise<IProjects[]> => {
  const response = await fetchReq<IProjects[]>(URL_PROJECTS_JSON);
  return response;
});

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (_state, action) => [...action.payload]);
  },
});

export const selectProjects = (state: RootState) => state.projects;

export default projectsSlice.reducer;
