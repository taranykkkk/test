const STATUS_ACCEPTED = 'accepted';
const STATUS_DECLINED = 'declined';
const STATUS_DONE = 'done';
const STATUS_WAIT_APPROVEMENT = 'wait_approvement';

export const STATUSES = {
  [STATUS_ACCEPTED]: {
    color: 'lime',
    text: 'accepted',
  },
  [STATUS_DECLINED]: {
    color: 'red',
    text: 'declined',
  },
  [STATUS_DONE]: {
    color: 'green',
    text: 'done',
  },
  [STATUS_WAIT_APPROVEMENT]: {
    color: '#dddd02',
    text: 'wait_approvement',
  },
};
