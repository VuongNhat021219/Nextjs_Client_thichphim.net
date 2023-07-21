let Mains = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

exports.getMains = () => {
  return Mains;
};

exports.getMainById = (id) => {
  return Mains.find((Main) => Main.id === parseInt(id));
};

exports.createMain = (name) => {
  const newMain = {
    id: Mains.length + 1,
    name: name,
  };
  Mains.push(newMain);
  return newMain;
};

exports.updateMain = (id, name) => {
  const Main = Mains.find((Main) => Main.id === parseInt(id));
  if (Main) {
    Main.name = name;
    return Main;
  }
  return null;
};

exports.deleteMain = (id) => {
  const index = Mains.findIndex((Main) => Main.id === parseInt(id));
  if (index !== -1) {
    return Mains.splice(index, 1)[0];
  }
  return null;
};
