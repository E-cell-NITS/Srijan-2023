import style from "./IndividualForm.module.scss";

const IndividualForm = ({ fields, handleFormChange, index }) => {
  return (
    <div className={style.formelementcontainer}>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.name}
          name="name"
          placeholder="Name"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.phoneno}
          name="phoneno"
          placeholder="Phone Number"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.email}
          name="email"
          placeholder="Email"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <select
          className={style.select}
          name="gender"
          defaultValue="Gender"
          onChange={(event) => handleFormChange(index, event)}
        >
          <option disabled className={style.option} value="Gender">
            Gender
          </option>
          <option className={style.option} value="MALE">
            Male
          </option>
          <option className={style.option} value="FEMALE">
            Female
          </option>
        </select>
      </div>
      <div className={style.formendline}></div>
    </div>
  );
};

export default IndividualForm;
