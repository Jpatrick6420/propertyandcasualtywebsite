function Popup({ text }) {
  return (
    <div className="text-xs text-stone-50 px-2 py-0.5 rounded-md shadow-sm shadow-gray-800  bg-blue-400 absolute col-span-2  right-0 -bottom-4">
      <p>{text}</p>
    </div>
  );
}

export default Popup;
