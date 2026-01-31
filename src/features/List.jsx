function List({ items, info }) {
  const changeVoicemails = (scripts) => {
    if (scripts.voicemail == "") return scripts;
    const withName = scripts.voicemail.replace("[Name]", info.name);
    const newInfo = withName.replace("[phoneNumber]", info.phoneNumber);

    return { ...scripts, voicemail: newInfo };
  };

  const newInfo = changeVoicemails(items);

  return (
    <li className="py-2 px-4 my-2 space-y-2 border-2 border-gray-700 hover:translate-x-2 hover:bg-blue-200">
      <h2 className="sm:text-sm lg:text-lg font-bold">
        {" "}
        Day: {items.day} {items.topic !== "" && items.topic}
      </h2>
      <p className="xs:text-sm lg:text-md">
        <b className="font-bold">Text: </b>
        {items.message}
      </p>
      {items.voicemail !== "" && (
        <p className="xs:text-sm lg:text-md">
          <b className="font-bold">Voicemail: </b>
          {newInfo.voicemail}
        </p>
      )}
    </li>
  );
}

export default List;
