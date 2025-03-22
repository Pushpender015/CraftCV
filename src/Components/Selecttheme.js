import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Selecttheme.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getthemedata } from "../Redux/Reducers/themeReducer";
import BounceLoader from "react-spinners/BounceLoader";
import { themedata } from "../utils/database";

function Selecttheme() {
  const [loading, setLoading] = useState(true);
  const themeredux = useSelector((state) => state.theme);
  const userredux = useSelector((state) => state.user.userdata);
  const prefill = themeredux.theme
    ? themeredux.theme
    : { themename: "", color: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clickindex, setClickindex] = useState("");
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      theme: prefill.themename,
      color: prefill.color,
    },
  });
  const [cardselect, setCardselect] = useState("");
  const [selected, setSelected] = useState(
    prefill.themename ? prefill : { themename: "", color: "" }
  );

  const onSubmit = () => {
    dispatch(getthemedata(selected));
    navigate(`/theme-${selected.themename.toLocaleLowerCase()}/download`);
  };

  const radioinputFunc = (e) => {
    if (e.target.checked) {
      setCardselect("card-selected");
    }
  };

  useEffect(() => {
    setLoading(true);
    if (!userredux.personal) {
      navigate("/");
    }
    setClickindex(
      prefill.themename
        ? themedata.findIndex((e) => e.themename === prefill.themename)
        : ""
    );
    setCardselect("card-selected");
    setLoading(false);
  }, [navigate, prefill.themename, userredux.personal]);

  const resetColor = (item) => {
    setValue("color", "");
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <BounceLoader color="#b30000" size={150} />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="selecttheme-form">
          <div className="theme-header text-3xl font-bold text-red-800 my-8">
            Select Theme
          </div>
          <div className="theme-main grid grid-cols-3 gap-6 mx-10 p-6 border border-red-700 rounded-lg shadow-sm">
            {themedata.map((item, index) => (
              <div
                key={index}
                className={`theme-card  rounded-lg p-4 cursor-pointer transform transition duration-300 hover:scale-105 ${index === clickindex ? cardselect : ""}`}
                onClick={() => {
                  setClickindex(index);
                  setSelected((prev) => ({ ...prev, themename: item.themename }));
                  setCardselect("card-selected");
                  resetColor(item);
                }}
              >
                <img
                  src={item.img}
                  alt={item.themename}
                  className="w-full rounded-md theme-img"
                />
                <div className="mt-3 text-center text-lg font-semibold text-text-secondary">
                  {item.themename}
                </div>
                <div className="flex justify-center mt-2">
                  <input
                    type="radio"
                    {...register("theme", { required: true })}
                    value={item.themename}
                    name="theme"
                    checked={index === clickindex}
                    onClick={() => setClickindex(index)}
                    onChange={radioinputFunc}
                    className="radio-input"
                  />
                </div>
              </div>
            ))}
            <div className="theme-main-msg col-span-3 text-center text-xl text-text-secondary mt-4">
              More themes will be available soon
            </div>
          </div>
          {errors.theme && (
            <div className="theme-err text-center text-red-500 mt-2">
              Select the theme
            </div>
          )}

          {clickindex !== "" && (
            <>
              <div className="theme-header text-3xl font-bold text-red-800 my-8">
                Select Theme Color
              </div>
              <div className="clr-select flex justify-center items-center gap-4 mx-10 p-4 border border-red-700 rounded-lg">
                {themedata[clickindex].colors.map((color, index) => (
                  <div key={index} className="clr-option flex flex-col items-center">
                    <input
                      type="radio"
                      {...register("color", { required: true })}
                      value={color}
                      name="color"
                      onChange={(e) =>
                        setSelected((prev) => ({
                          ...prev,
                          color: e.target.value,
                        }))
                      }
                      className="radio-input"
                    />
                    <div
                      className="color-box mt-1 rounded"
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                ))}
              </div>
              {errors.color && (
                <div className="theme-err text-center text-red-500 mt-2">
                  Select the theme color
                </div>
              )}
            </>
          )}

          <div className="btn-div flex justify-center gap-10 my-8">
            <Link to="/resumebuild" className="link">
              <button type="button" className="btn">
                Back
              </button>
            </Link>
            <button type="submit" className="btn">
              Proceed
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Selecttheme;
