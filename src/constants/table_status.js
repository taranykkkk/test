export const STATUS_ACCEPTED = 'accepted';
export const STATUS_DECLINED = 'declined';
export const STATUS_DONE = 'done';
export const STATUS_WAIT_APPROVEMENT = 'wait_approvement';

export const STATUSES = {
  [STATUS_ACCEPTED]: {
    color: 'lime',
    text: 'Accepted',
  },
  [STATUS_DECLINED]: {
    color: 'red',
    text: 'Declined',
  },
  [STATUS_DONE]: {
    color: 'green',
    text: 'Done',
  },
  [STATUS_WAIT_APPROVEMENT]: {
    color: '#dddd02',
    text: 'Wait approvement',
  },
};
