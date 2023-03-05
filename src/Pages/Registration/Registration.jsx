import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import style from "./Registration.module.scss";

import { TeamForm, IndividualForm, Sidelinks } from "../../Components";

import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [inputMainField, setMainInputField] = useState({
    name: "",
    email: "",
    phoneno: "",
    teamName: "",
    gender: "",
  });
  const [inputField, setInputField] = useState([]);
  const [eventDetails, setEventDetails] = useState("");
  const [maxTeamSize, setMaxTeamSize] = useState(1);
  const [currentFormLength, setCurrentFormLength] = useState([]);

  const handleMainFormChange = (event) => {
    const data = { ...inputMainField };
    data[event.target.name] = event.target.value;
    setMainInputField(data);
  };

  const handleFormChange = (index, event) => {
    const data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data);
  };

  const addMembers = () => {
    if (inputField.length === maxTeamSize - 1) {
      // eslint-disable-next-line no-alert
      alert(`Maximum Team Size is ${maxTeamSize}`);
      return;
    }
    const newForm = { name: "", email: "", phoneno: "", gender: "" };
    setInputField([...inputField, newForm]);
    setCurrentFormLength([...currentFormLength, currentFormLength.length + 1]);
  };

  const removeMember = () => {
    if (inputField.length === 0) {
      return;
    }
    const data = [...inputField];
    data.splice(inputField.length - 1, 1);
    setInputField(data);
    currentFormLength.splice(currentFormLength.length - 1, 1);
    setCurrentFormLength(currentFormLength);
  };

  const fetchEventDetails = async () => {
    const data = await fetch("/db/events.json");
    const rData = await data.json();
    const eventObj = rData.find((item) => item.name === params.event);

    if (!eventObj) {
      navigate("/");
    }

    setEventDetails(eventObj.description);
    setMaxTeamSize(eventObj.maxTeamSize);
  };

  const Register = async () => {
    if (
      !inputMainField.gender ||
      !inputMainField.name ||
      !inputMainField.phoneno ||
      (maxTeamSize !== "1" ? inputMainField.teamName.length === 0 : false)
    ) {
      return toast.error("Please Fill Up All The Details", { autoClose: 1200 });
    }

    for (let i = 0; i < inputField.length; i += 1) {
      if (
        !inputField[i].gender ||
        !inputField[i].name ||
        !inputField[i].phoneno ||
        !inputField[i].email
      ) {
        return toast.error("Please Fill Up All The Details", { autoClose: 1200 });
      }
    }

    const data = { eventName: params.event };
    if (inputMainField.teamName !== "") {
      data.teamName = inputMainField.teamName;
    }

    const filteredMainFieldData = { ...inputMainField };
    delete filteredMainFieldData.teamName;
    const members = [...inputField, filteredMainFieldData];

    data.members = members;

    const response = await fetch(import.meta.env.VITE_REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const parsedResponse = await response.json();
    if (parsedResponse.status === 200) {
      return toast.success("Successfully registered", { autoClose: 1200 });
    }

    return toast.error(parsedResponse.msg, { autoClose: 1200 });
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  return (
    <div className={style.registrationcontainer}>
      <div className={style.leftcontainer}>
        <Sidelinks />
      </div>
      <div className={style.rightcontainer}>
        <div className={style.coverpicontainer}>
          <div className={style.coverimgcontainer}>
            <img src="/images/iplimg.png" alt="cover pic" />
          </div>
          <div className={style.descriptioncontainer}>
            <div className={style.descheading}>{params.event}</div>
            <div className={style.description}>{eventDetails}</div>
          </div>
        </div>
        <div className={style.formcontainer}>
          <div className={style.formheading}>Registration Form</div>
          <div className={style.form}>
            <div className={style.form2}>
              <ToastContainer />
              <TeamForm
                fields={inputMainField}
                handleMainFormChange={handleMainFormChange}
                maxTeamSize={maxTeamSize}
              />
            </div>
            {inputField.map((item, index) => {
              return (
                <div className={style.form2} key={currentFormLength[index]}>
                  <div>Member {index + 2}</div>
                  <IndividualForm
                    fields={item}
                    handleFormChange={handleFormChange}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.addDelete}>
            {inputField.length !== maxTeamSize - 1 && (
              <div className={style.addmember}>
                <button onClick={addMembers}>
                  <AiOutlinePlus className={style.addicon} />
                  Add member
                </button>
              </div>
            )}
            {inputField.length > 0 && (
              <div className={style.deletemember}>
                <button onClick={removeMember}>
                  <AiOutlineDelete className={style.deleteicon} />
                  Delete member
                </button>
              </div>
            )}
          </div>
          <div className={style.submit}>
            <button onClick={Register}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
