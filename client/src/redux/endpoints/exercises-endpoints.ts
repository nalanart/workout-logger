import { api } from '../api';

export const exercisesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getManyExercises: build.query<Exercise[], void>({
      query: () => ({
        url: '/exercises',
      }),
      providesTags: ['Exercise'],
    }),
    createOneExercise: build.mutation<Exercise, CreateExerciseDto>({
      query: (body) => ({
        url: '/exercises',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Exercise'],
    }),
  }),
  overrideExisting: false,
});

export type Exercise = {
  id: number;
  name: string;
};

export type CreateExerciseDto = {
  name?: string;
};

export const { useGetManyExercisesQuery, useCreateOneExerciseMutation } =
  exercisesApi;
