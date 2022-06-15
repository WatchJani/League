const formData = (type, edit) => {
  let data = [
    {
      id: 1,
      type: 'email',
      name: 'email',
      placeholder: 'email',
      required: true,
    },
  ];

  switch (true) {
    case type === 'users' && edit:
    case type === 'register':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
        },
        {
          id: 2,
          type: 'text',
          name: 'lastName',
          placeholder: 'last name',
        },
        {
          id: 3,
          type: 'password',
          name: 'password',
          placeholder: 'password',
        },
        { id: 4, type: 'text', name: 'address', placeholder: 'address' },
        { id: 5, type: 'text', name: 'phone', placeholder: 'phone' },
        { id: 6, type: 'file', name: 'image', placeholder: 'image' },
        //name se koristi za ime koje ce se primati na serveru
      ];
      break;

    case type === 'teams':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
        },
        { id: 2, type: 'text', name: 'address', placeholder: 'address' },
        { id: 3, type: 'file', name: 'image', placeholder: 'image' },
      ];
      break;

    case type === 'players':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
        },
        {
          id: 2,
          type: 'text',
          name: 'lastName',
          placeholder: 'last name',
        },
        { id: 3, type: 'number', name: 'height', placeholder: 'height' },
        { id: 4, type: 'number', name: 'weight', placeholder: 'weight' },
        { id: 5, type: 'file', name: 'image', placeholder: 'image' },
      ];
      break;

    case type === 'leagues':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
        },
        { id: 2, type: 'text', name: 'address', placeholder: 'address' },
        { id: 3, type: 'file', name: 'image', placeholder: 'image' },
      ];
      break;

    case type === 'seasons':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
        },
        { id: 2, type: 'number', name: 'number', placeholder: 'number' },
        { id: 3, type: 'number', name: 'actual', placeholder: 'actual' },
        { id: 4, type: 'text', name: 'locked', placeholder: 'locked' },
        { id: 5, type: 'file', name: 'image', placeholder: 'image' },

      ];
      break;
  }

  return data;
};
export default formData;
