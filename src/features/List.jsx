function List({ items, info }) {
  const changeVoicemails = (scripts) => {
    if (scripts.voicemail == "") return scripts;
    const withName = scripts.voicemail.replace("[Name]", info.name);
    const newInfo = withName.replace("[phoneNumber]", info.phoneNumber);

    return { ...scripts, voicemail: newInfo };
  };

  const newInfo = changeVoicemails(items);

  const handleCopyText = async (e) => {
    if (e.target.closest("button")) return;
    try {
      const newMessage = items.message.replace(
        "[Car or Home]",
        "home and auto",
      );
      await navigator.clipboard.writeText(newMessage);
    } catch (err) {
      console.error("Failed to copy text: ", err.message);
    }
  };
  const handleAutoClick = async () => {
    try {
      const newMessage = items.message.replace("a [Car or Home]", "an auto");

      await navigator.clipboard.writeText(newMessage);
    } catch (err) {
      console.error("Failed to copy text: ", err.message);
    }
  };

  const handleHomeClick = async () => {
    try {
      const newMessage = items.message.replace("[Car or Home]", "home");

      await navigator.clipboard.writeText(newMessage);
    } catch (err) {
      console.error("Failed to copy text: ", err.message);
    }
  };

  return (
    <li
      className="py-2 px-4 my-2 space-y-2 border-2 border-gray-700 hover:translate-x-2 hover:bg-blue-200 hover:cursor-pointer"
      onClick={(e) => {
        handleCopyText(e);
      }}
    >
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
      {items.buttons && (
        <div className="flex justify-center gap-2">
          <button
            onClick={handleHomeClick}
            className="px-1 py-0.5 text-stone-50 bg-green-500 hover:bg-green-400 hover:outline-1 rounded-sm outline-gray-500 hover:scale-105 active:scale-100 hover:cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={handleAutoClick}
            className="px-1 py-0.5 text-stone-50 bg-green-500 hover:bg-green-400 hover:outline-1 rounded-sm outline-gray-500 hover:scale-105 active:scale-100 hover:cursor-pointer"
          >
            Car
          </button>
        </div>
      )}
    </li>
  );
}

export default List;
