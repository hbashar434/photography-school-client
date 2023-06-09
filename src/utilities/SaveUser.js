const SaveUser = (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: "user",
  };

  fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export default SaveUser;
