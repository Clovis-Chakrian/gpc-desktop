interface INotices {
  id: string,
  title: string,
  description: string,
  schoolClass: string,
  createdAt: string
}

interface IEvents {
  id: string,
  title: string,
  description: string,
  date: string
}

export {
  INotices,
  IEvents
};