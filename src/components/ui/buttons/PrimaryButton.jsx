function PrimaryButton({ title }) {
  return (
    <div className="flex justify-center">
      <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary text-white py-2.5 cursor-pointer px-8 rounded-full">
        {title}
      </button>
    </div>
  );
}

export default PrimaryButton;
