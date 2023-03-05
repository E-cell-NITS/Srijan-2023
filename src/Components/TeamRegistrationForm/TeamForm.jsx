import style from "./TeamForm.module.scss";

const TeamForm = ({ fields, handleMainFormChange, maxTeamSize }) => {
  return (
    <div className={style.formelementcontainer}>
      {maxTeamSize !== "1" && (
        <div className={style.inputcontainer}>
          <input
            type="text"
            className={style.input}
            value={fields.teamName}
            name="teamName"
            placeholder="Team Name"
            onChange={(event) => handleMainFormChange(event)}
          />
        </div>
      )}
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.name}
          name="name"
          placeholder="Name"
          onChange={(event) => handleMainFormChange(event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.phoneno}
          name="phoneno"
          placeholder="Phone Number"
          onChange={(event) => handleMainFormChange(event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.email}
          name="email"
          placeholder="Email"
          onChange={(event) => handleMainFormChange(event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <select
          className={style.select}
          defaultValue="Gender"
          name="gender"
          onChange={(event) => handleMainFormChange(event)}
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

export default TeamForm;
