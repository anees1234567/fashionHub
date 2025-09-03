import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import signup from "../../../assets/Images/signup.png"; 
import { CustomFormField } from "../../../uitilities/CustomComponents/Customformfields";
import { InferType, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { createUserService } from "../service";

const schema = object({
  name: string().required("Name is required"),
  email:string().email("Invalid email format").required("Email is required"),
  password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
  mobile: string().max(10).required("Mobile number is required"),
  dob: string().required("Date of birth is required"),
});
type FormData = InferType<typeof schema>;
export default function SignupPage() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormData>({resolver:yupResolver(schema)});


  const {mutate:register,isPending}=useMutation({mutationFn:createUserService,onSuccess:(data)=>{
    console.log(data)
  }})

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    register(data)
  };

  
return (
  <div className="flex flex-col md:flex-row h-screen">
    <div className="hidden md:block md:w-3/5 h-screen relative">
      <img
        src={signup}
        alt="Signup"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-10 left-10 max-w-lg text-white">
        <p className="text-lg font-mono mb-4">
          “Figma ipsum component variant main layer. Create flatten create
          effect move strikethrough. Union export plugin bullet effect hand
          arrange align.”
        </p>
        <div>
          <p className="font-semibold font-mono">Pam Hand</p>
          <p className="text-sm">pam.hand@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-2/5 flex items-center justify-center p-8 md:p-12 bg-white shadow-lg">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
          Create an Account
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Are you ready to join us? Let’s create Account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <CustomFormField
            control={control}
            element="input"
            name="name"
            fieldProps={{ label: "Full name", placeholder: "john doe", fullWidth: true }}
            rules={{}}
          />
          <CustomFormField
            control={control}
            element="input"
            name="email"
            fieldProps={{ label: "Email", placeholder: "user@gmail.com", type: "email", InputLabelProps: { shrink: false }, fullWidth: true }}
            rules={{}}
          />
          <CustomFormField
            control={control}
            element="input"
            name="dob"
            fieldProps={{ label: "Date Field", type: "date", fullWidth: true, InputLabelProps: { shrink: true } }}
            rules={{}}
          />
          <CustomFormField
            control={control}
            element="input"
            name="mobile"
            fieldProps={{ label: "Mobile", placeholder: "+91 9XXXXXXX0", fullWidth: true, InputLabelProps: { shrink: true } }}
            rules={{}}
          />
          <CustomFormField
            control={control}
            element="input"
            name="password"
            fieldProps={{ label: "Password", type: "password", placeholder: "Enter password", fullWidth: true }}
            rules={{}}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="!bg-black !text-white !rounded-md !py-3 hover:!bg-gray-800 transition"
            endIcon={isPending && <CircularProgress size={20} color="inherit" />}
          >
            Create Account
          </Button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-semibold text-black"
          >
            Sign-In
          </button>
        </p>
      </div>
    </div>
  </div>
);

}
