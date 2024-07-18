import { useForm } from "./hook";
import CounterContainer from "../Counter/CounterContainer";

const ReviewForm = () => {
  const { form, updateName, updateText, updateRating, resetForm } = useForm();

  const { name, text, rating } = form;

  const handleSave = () => {
    console.log("Saved:", form);
    resetForm();
  };

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          value={name}
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          value={text}
          onChange={(event) => {
            updateText(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Rating</span>
        <CounterContainer value={rating} setValue={updateRating} />
      </div>
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default ReviewForm;
