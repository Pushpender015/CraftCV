import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import "./Input.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clruserdata, getuserdata } from "../Redux/Reducers/userReducer";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

function Input() {
  const [loading, setLoading] = useState(true);
  const userredux = useSelector((state) => state.user.userdata);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [present, Setpresent] = useState([]);
  const [grade, Setgrade] = useState([]);
  const [hint, Sethint] = useState("hint-hide");
  const emptydata = {
    experience: [{
      company: "", description: "", worktitle: "", tags:"", yearfrom: "", yearto: "", present: false
    }],
    course: [{
      name: "", provider: ""
    }],
    education: [{
      degree: "", grade: "", university: "", yearfrom: "", yearto: "", gradetype: "percentage"
    }],
    personal: {
      technicalskill: [{
        skill: "", rate: ""
      }],
      interest: [{
        hobbie: ""
      }],
      name: "", lastname: "", date: "", email: "", mob: "",
      city: "", country: "", image: "",
      title: "", quote: ""
    },
    project: [{
      name: "", tech: "", des:"", link:""
    }],
    link: {
      linkedin: "",
      github: "",
      portfolio: ""
    },
  }
  const filldata = userredux.personal ? userredux : emptydata

  const { register, handleSubmit, control, formState: { errors }, reset} = useForm({
    defaultValues: filldata
  });

  const eduerror = errors.education || [];

  const {
    fields: interestFields,
    append: interestAppend,
    remove: interestRemove
  } = useFieldArray({ control, name: "personal.interest" });

  const {
    fields: technicalFields,
    append: technicalAppend,
    remove: technicalRemove
  } = useFieldArray({ control, name: "personal.technicalskill" });

  const {
    fields: experienceFields,
    append: experienceAppend,
    remove: experienceRemove
  } = useFieldArray({ control, name: "experience" });

  const {
    fields: courseFields,
    append: courseAppend,
    remove: courseRemove
  } = useFieldArray({ control, name: "course" });

  const {
    fields: educationFields,
    append: educationAppend,
    remove: educationRemove
  } = useFieldArray({ control, name: "education" });

  const {
    fields: projectFields,
    append: projectAppend,
    remove: projectRemove
  } = useFieldArray({ control, name: "project" });

  const loadFunc = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if(userredux.experience){
      userredux.experience.map((val,index)=>{
        return(val.present===true ? Setpresent(prev => [...prev,index]) : null)
      });

      userredux.education.map((val,index)=>{
        return(val.gradetype==="grade" ? Setgrade(prev => [...prev,index]) : null)
      });
    }

    loadFunc();
  }, [userredux.education, userredux.experience]);

  const onSubmit = (data) => {
    dispatch(getuserdata(data));
    navigate("/selecttheme");
  }

  const checkboxFunc = (e,index) => {
    const { checked } = e.target;
    const i = present.includes(index);

    if(!i && checked){
      Setpresent(prev => [...prev,index]);
    } else if(i && !checked){
      Setpresent(present.map(value => value === index ? "" : value));
    }
  }

  const graderadioFunc=(e,index)=>{
    const i = grade.includes(index);
    if(!i && e.target.value==="grade"){
      Setgrade(prev => [...prev,index]);
    } else if(i && e.target.value==="percentage"){
      Setgrade(grade.map(val => val === index ? "" : val));
    }
  }

  const clrFunc = () => {
    dispatch(clruserdata());
    reset(emptydata);
  }

  return (
    <>
      {loading ? (
        <BounceLoader className='loader' color="#b30000" size={150} />
      ) : (
        <>
          <div className="input-header bg-gradient-to-r from-black to-red-800 text-white py-4 text-center text-2xl font-bold">
            Enter your details
          </div>
          <div className="input-main mx-10 my-8 rounded-lg shadow-xl border border-red-700 overflow-hidden">
            <form className="input-form w-full max-w-4xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Personal Details */}
              <div className="col-span-2 input-section">
                <h2 className="section-title text-red-700 font-semibold text-xl mb-2">Personal Details</h2>
              </div>
              <input {...register("personal.name", { required: true })} placeholder="Name" className="input-field" />
              <input {...register("personal.lastname", { required: true })} placeholder="Last Name" className="input-field" />
              <input className="input-field input-mob" type="number" inputMode="tel" {...register("personal.mob", { maxLength: 10, required: true })} placeholder="Mobile No- +91" />
              <input className="input-field" type="email" inputMode="email" {...register("personal.email", { required: true })} placeholder="Email" />
              <input {...register("personal.city", { required: true })} placeholder="City" className="input-field" />
              <input {...register("personal.country", { required: true })} placeholder="Country" className="input-field" />
              <input {...register("personal.title", { required: true })} placeholder="Professional Title e.g Full Stack Developer" className="input-field col-span-2" />
              <input {...register("personal.quote", { required: true })} placeholder="Describe yourself in one or two lines" className="input-field col-span-2" />
              <div className="form-img col-span-2 relative flex items-center">
                <input type="url" {...register("personal.image", { required: true })} placeholder="Paste your image url" className="input-field flex-grow" />
                <div onMouseEnter={() => Sethint("hint")} onTouchEnd={() => Sethint("hint-hide")} onTouchStart={() => Sethint("hint")} onMouseLeave={() => Sethint("hint-hide")} className="hint-icon ml-2 cursor-pointer text-red-700">
                  i
                </div>
                <div className={hint}>
                  You can copy and paste your github/linkedin profile image url here.<br />
                  By right clicking and copy image address
                </div>
              </div>

              {/* Interest/Skills */}
              <div className="col-span-2 input-section">
                <h2 className="section-title text-red-700 font-semibold text-xl mb-2">Interest/Skills</h2>
              </div>
              <div className="input-interest col-span-2">
                {interestFields.map((item, index) => (
                  <div key={item.id} className="relative">
                    <input {...register(`personal.interest[${index}].hobbie`, { required: true })} defaultValue={item.hobbie} placeholder="Interest/Hobbies e.g Chess" className="input-field" />
                    {index !== 0 && <RiCloseFill onClick={() => interestRemove(index)} className="interest-cls-icon" />}
                  </div>
                ))}
              </div>
              <div className="add-input-block col-span-2 flex items-center">
                <BsFillPlusCircleFill onClick={() => interestAppend()} className="add-input-icon cursor-pointer" />
                <div className="flex-grow border-b-2 border-dashed border-red-700"></div>
              </div>

              {technicalFields.map((item, index) => (
                <React.Fragment key={item.id}>
                  <input {...register(`personal.technicalskill[${index}].skill`, { required: true })} defaultValue={item.skill} placeholder="Technical Skills e.g Javascript" className="input-field" />
                  <input type="number" inputMode="decimal" min="0" max="10" {...register(`personal.technicalskill[${index}].rate`, { required: true })} defaultValue={item.rate} placeholder="Rate your skill out of 10" className="input-field" />
                  {index !== 0 && (
                    <div className="input-remove flex items-center justify-end">
                      <div onClick={() => technicalRemove(index)} className="flex items-center space-x-1 cursor-pointer">
                        <RiCloseFill className="input-remove-icon" />
                        <div className="text-sm">Remove</div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="add-input-block col-span-2 flex items-center">
                <BsFillPlusCircleFill onClick={() => technicalAppend()} className="add-input-icon cursor-pointer" />
                <div className="flex-grow border-b-2 border-dashed border-red-700"></div>
              </div>

              {/* Work Experience */}
              <div className="col-span-2 input-section">
                <h2 className="section-title text-red-700 font-semibold text-xl mb-2">Work Experience (if any?)</h2>
              </div>
              {experienceFields.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="input-index font-semibold text-red-700">{index + 1}.</div>
                  <input {...register(`experience[${index}].worktitle`)} defaultValue={item.worktitle} placeholder="Title/Position" className="input-field" />
                  <input {...register(`experience[${index}].company`)} defaultValue={item.company} placeholder="Workplace/Company" className="input-field" />
                  <input className="input-field singlefield" {...register(`experience[${index}].description`)} defaultValue={item.description} placeholder="Description about your work in one or two lines" />
                  <input className="input-field singlefield" {...register(`experience[${index}].tags`)} defaultValue={item.tags} placeholder="Link, Tags, Tech-stack or anything" />
                  <div className="year col-span-2 flex items-center space-x-2">
                    <input name="year" inputMode="numeric" {...register(`experience[${index}].yearfrom`)} defaultValue={item.yearfrom} placeholder="mm/yy" className="input-year" />
                    {!present.includes(index) && (
                      <>
                        <span>-</span>
                        <input name="year" inputMode="numeric" {...register(`experience[${index}].yearto`)} defaultValue={item.yearto} placeholder="mm/yy" className="input-year" />
                      </>
                    )}
                    <label className="flex items-center space-x-1">
                      <input type="checkbox" {...register(`experience[${index}].present`)} onChange={(e)=>checkboxFunc(e,index)} />
                      <span className="input-span">Present?</span>
                    </label>
                  </div>
                  {index !== 0 && (
                    <div className="input-remove flex items-center justify-end">
                      <div onClick={() => experienceRemove(index)} className="flex items-center space-x-1 cursor-pointer">
                        <RiCloseFill className="input-remove-icon" />
                        <div className="text-sm">Remove</div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="add-input-block col-span-2 flex items-center">
                <BsFillPlusCircleFill onClick={() => experienceAppend()} className="add-input-icon cursor-pointer" />
                <div className="flex-grow border-b-2 border-dashed border-red-700"></div>
              </div>

              {/* Personal Projects */}
              <div className="col-span-2 input-section">
                <h2 className="section-title text-red-700 font-semibold text-xl mb-2">Personal Projects</h2>
              </div>
              {projectFields.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="input-index font-semibold text-red-700">{index + 1}.</div>
                  <input className="input-field singlefield" {...register(`project[${index}].name`)} defaultValue={item.name} placeholder="Project Title" />
                  <input className="input-field singlefield" {...register(`project[${index}].tech`)} defaultValue={item.tech} placeholder="Tech Used e.g Html, Python (Use comma and space)" />
                  <input className="input-field singlefield" {...register(`project[${index}].des`)} defaultValue={item.des} placeholder="Project Description (Optional)" />
                  <input type="url" className="input-field singlefield" {...register(`project[${index}].link`)} defaultValue={item.link} placeholder="Link (Optional)" />
                  {index !== 0 && (
                    <div className="input-remove flex items-center justify-end">
                      <div onClick={() => projectRemove(index)} className="flex items-center space-x-1 cursor-pointer">
                        <RiCloseFill className="input-remove-icon" />
                        <div className="text-sm">Remove</div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="add-input-block col-span-2 flex items-center">
                <BsFillPlusCircleFill onClick={() => projectAppend()} className="add-input-icon cursor-pointer" />
                <div className="flex-grow border-b-2 border-dashed border-red-700"></div>
              </div>

              {/* Courses/Trainings & Certificates */}
              <div className="col-span-2 input-section">
                <h2 className="section-title text-red-700 font-semibold text-xl mb-2">Courses/Trainings & Certificates</h2>
              </div>
              {courseFields.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="input-index font-semibold text-red-700">{index + 1}.</div>
                  <input {...register(`course[${index}].name`)} defaultValue={item.name} placeholder="Course/Certificate Name" className="input-field" />
                  <input {...register(`course[${index}].provider`)} defaultValue={item.provider} placeholder="Course Provider Name" className="input-field" />
                  {index !== 0 && (
                    <div className="input-remove flex items-center justify-end">
                      <div onClick={() => courseRemove(index)} className="flex items-center space-x-1 cursor-pointer">
                        <RiCloseFill className="input-remove-icon" />
                        <div className="text-sm">Remove</div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="add-input-block col-span-2 flex items-center">
                <BsFillPlusCircleFill onClick={() => courseAppend()} className="add-input-icon cursor-pointer" />
                <div className="flex-grow border-b-2 border-dashed border-red-700"></div>
              </div>

              {/* Education */}
              <div className="col-span-2 input-section">
                <h2 className="section-title text-red-700 font-semibold text-xl mb-2">Education</h2>
              </div>
              {educationFields.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="input-index font-semibold text-red-700">{index + 1}.</div>
                  <input className="input-field singlefield" {...register(`education[${index}].degree`, { required: true })} placeholder="College/Degree/Diploma Name" />
                  <div className="edu-grade col-span-2 grid grid-cols-3 items-center gap-2">
                    <div className="flex items-center space-x-1">
                      <input
                        name="gradetype"
                        value="percentage"
                        onClick={(e) => graderadioFunc(e,index)}
                        {...register(`education[${index}].gradetype`, { required: true })}
                        type="radio"
                        className="cursor-pointer"
                      />
                      <span className="input-span text-sm">Percentage?</span>
                    </div>
                    <div className="text-center">/</div>
                    <div className="flex items-center space-x-1">
                      <input
                        name="gradetype"
                        value="grade"
                        onClick={(e) => graderadioFunc(e,index)}
                        {...register(`education[${index}].gradetype`, { required: true })}
                        type="radio"
                        className="cursor-pointer"
                      />
                      <span className="input-span text-sm">Grade?</span>
                    </div>
                    {eduerror[index]?.gradetype && (
                      <div className="input-err col-span-3 text-center font-normal text-xs">
                        Please select percentage/grade
                      </div>
                    )}
                  </div>
                  <div className="grade-input col-span-2 flex items-center">
                    <input
                      type="number"
                      inputMode="decimal"
                      step="any"
                      min="0"
                      max="100"
                      {...register(`education[${index}].grade`, { required: true })}
                      placeholder="Grade/Percentage"
                      className="input-field flex-grow"
                    />
                    <span className="ml-2 text-sm">{!grade.includes(index) ? " %" : " /10"}</span>
                  </div>
                  <input className="input-field singlefield" {...register(`education[${index}].university`, { required: true })} placeholder="Institute/University Name" />
                  <div className="year col-span-2 flex items-center space-x-2">
                    <input name="year" inputMode="decimal" {...register(`education[${index}].yearfrom`, { required: true })} placeholder="yyyy e.g 2010" className="input-year" />
                    <span>-</span>
                    <input name="year" inputMode="numeric" {...register(`education[${index}].yearto`, { required: true })} placeholder="yyyy e.g 2014" className="input-year" />
                  </div>
                  {index !== 0 && (
                    <div className="input-remove flex items-center justify-end">
                      <div onClick={() => educationRemove(index)} className="flex items-center space-x-1 cursor-pointer">
                        <RiCloseFill className="input-remove-icon" />
                        <div className="text-sm">Remove</div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="add-input-block col-span-2 flex items-center">
                <BsFillPlusCircleFill onClick={() => educationAppend()} className="add-input-icon cursor-pointer" />
                <div className="flex-grow border-b-2 border-dashed border-red-700"></div>
              </div>

              {/* Social/Links */}
              <div className="col-span-2 input-section">
                <h2 className="section-title text-red-700 font-semibold text-xl mb-2">Social/Links</h2>
              </div>
              <input {...register("link.linkedin", { required: true })} placeholder="Linkedin Url" className="input-field col-span-2" />
              <input {...register("link.github", { required: true })} placeholder="Github Url" className="input-field col-span-2" />
              <input className="input-field singlefield col-span-2" {...register("link.portfolio")} placeholder="Portfolio Url or any other (Optional)" />

              {errors.personal || errors.education ? (
                <span className="input-err col-span-2 text-center">Please enter the required field</span>
              ) : null}
              {userredux.personal ? (
                <div className="singlefield btndiv col-span-2 mt-3 grid grid-cols-2 gap-4">
                  <input className="input-btn" value="Clear All" onClick={clrFunc} readOnly />
                  <input className="input-btn" type="submit" value="Next" />
                </div>
              ) : (
                <input className="input-btn singlefield col-span-2 mt-3" type="submit" value="Next" />
              )}
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Input;
