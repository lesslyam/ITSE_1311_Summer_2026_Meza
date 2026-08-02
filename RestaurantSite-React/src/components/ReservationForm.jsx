import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  partySize: "",
  date: "",
  time: "",
  seating: "",
  notes: "",
  newsletter: false,
};

function ReservationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setMessage("");
      return;
    }

    setMessage("Reservation submitted successfully!");
    setFormData(initialFormData);
  }

  function handleReset() {
    setFormData(initialFormData);
    setMessage("");
  }

  return (
    <>
      {message && (
        <p className="success-message" role="status">
          {message}
        </p>
      )}

      <form
        className="reservation-form"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={20}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="partySize">Party Size</label>

          <select
            id="partySize"
            name="partySize"
            required
            value={formData.partySize}
            onChange={handleChange}
          >
            <option value="">Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>

          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>

          <input
            type="time"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          />
        </div>

        <fieldset className="seating-fieldset">
          <legend>Seating Preference</legend>

          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="seating"
                value="Indoor"
                required
                checked={formData.seating === "Indoor"}
                onChange={handleChange}
              />
              Indoor
            </label>

            <label>
              <input
                type="radio"
                name="seating"
                value="Outdoor"
                checked={formData.seating === "Outdoor"}
                onChange={handleChange}
              />
              Outdoor
            </label>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="notes">Dietary Notes</label>

          <input
            type="text"
            id="notes"
            name="notes"
            maxLength={30}
            value={formData.notes}
            onChange={handleChange}
          />

          <small>{formData.notes.length}/30 characters</small>
        </div>

        <label className="checkbox-option">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          Sign up for newsletter
        </label>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  );
}

export default ReservationForm;