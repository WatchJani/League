const formData = (type) => {
  let data = [
    {
      id: 1,
      type: 'text',
      name: 'name',
      placeholder: 'name',
      required: true,
    },
    {
      id: 2,
      type: 'text',
      name: 'lastName',
      placeholder: 'last name',
      required: true,
    },
    {
      id: 3,
      type: 'password',
      name: 'password',
      placeholder: 'password',
      required: true,
    },
    { id: 4, type: 'text', name: 'address', placeholder: 'address' },
    { id: 5, type: 'text', name: 'phone', placeholder: 'phone' },
    { id: 6, type: 'file', name: 'image', placeholder: 'image' },
    //name se koristi za ime koje ce se primati na serveru
  ];

  switch (type) {
    case 'teams':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
          required: true,
        },
        { id: 2, type: 'text', name: 'address', placeholder: 'address' },
        { id: 3, type: 'file', name: 'image', placeholder: 'image' },
      ];
      break;

    case 'players':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
          required: true,
        },
        {
          id: 2,
          type: 'text',
          name: 'lastName',
          placeholder: 'last name',
          required: true,
        },
        { id: 3, type: 'number', name: 'height', placeholder: 'height' },
        { id: 4, type: 'number', name: 'weight', placeholder: 'weight' },
        { id: 5, type: 'file', name: 'image', placeholder: 'image' },
      ];
      break;

    case 'leagues':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
          required: true,
        },
        { id: 2, type: 'text', name: 'address', placeholder: 'address' },
        { id: 3, type: 'file', name: 'image', placeholder: 'image' },
      ];
      break;

    case 'seasons':
      data = [
        {
          id: 1,
          type: 'text',
          name: 'name',
          placeholder: 'name',
          required: true,
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
