function NotificationModal({ type, header, message }) {
  let containerStyle =
    "fixed top-4 left-4 right-4 sm:left-auto sm:right-6 sm:top-6 sm:w-80 z-50 rounded-2xl shadow-md shadow-gray-700 px-6 py-4";

  let headerStyle = "text-md font-bold";

  if (type === "isError") {
    containerStyle += " bg-red-200 text-gray-900";
  }

  if (type === "isTip") {
    containerStyle += " bg-teal-200 text-gray-900 top-44 sm:top-32";
  }
  return (
    <div className={containerStyle}>
      <h3 className={headerStyle}>{header}</h3>
      <p className="text-xs">{message}</p>
    </div>
  );
}

export default NotificationModal;
