import React, { useState } from "react";

export default function NewCom({ coms, setcoms, setstate, state }) {
  const [vals, setvals] = useState({ name: "", text: "",imgSrc:"" });
  const elem = {
    id: coms.length > 0 ? coms[coms.length - 1].id + 1 : 1,
    likecount: 0,
    name: vals.name,
    comment: vals.text,
    imgSrc:vals.imgSrc
  };
  function addNew() {
    if (elem.comment && elem.name&& elem.imgSrc) {
      setcoms(elem);
    }

    setstate(false);
    setvals({ name: "", text: "" });
  }
  const onLoad = (fileString) => {
    vals.imgSrc = fileString;
    setvals({...vals})
    
    console.log( elem.imgSrc);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  const onChangeImage = (e) => {
    const files = e.target.files;

    const file = files[0];
    getBase64(file);
  };
  return (
    <div className={state ? "add-wrapper" : "add-wrapper hidden"}>
      <form
        className="add"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="download" className="lab">
          Ներբեռնել նկար
        </label>
        <input
          type="file"
          name="profile-image"
          className="file"
          id="download"
          onChange={onChangeImage}
        />
        <input
          type="text"
          placeholder="Անուն"
          id="newuserName"
          value={vals.name}
          onChange={(e) => {
            vals.name = e.target.value;
            setvals({ ...vals });
          }}
        />
      </form>

      <textarea
        placeholder="Ավելացնել մեկնաբանություն"
        value={vals.text}
        onChange={(e) => {
          vals.text = e.target.value;
          setvals({ ...vals });
        }}
      ></textarea>
      <div className="sendComBtns">
        <button className="sendCom" type="submit" onClick={addNew}>
          Ուղարկել
        </button>
        <button
          className="sendCom"
          type="submit"
          onClick={() => setstate(false)}
        >
          Չեղարկել
        </button>
      </div>
    </div>
  );
}
