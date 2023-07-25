import { taskFirst, taskNext } from './0-constants';

test('tasks are correctly defined', () => {
  expect(`${taskFirst()} ${taskNext()}`).toStrictEqual(
    'I prefer const when I can. But sometimes let is okay',
  );
});
