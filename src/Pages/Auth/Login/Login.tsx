import { Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useNotification } from "../../../notification/context";
import { CustomFormField } from "../../../uitilities/CustomComponents/Customformfields";
import { useAuth } from "../../../Auth/useAuth";
import { loginService, UserType } from "../service";
import { yupResolver } from "@hookform/resolvers/yup";
import { string,object  } from "yup";
import loginImage from "../../../assets/Images/login.png"
import { useEffect } from "react";
const schema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});
function LoginForm(){
  const {
    control,
    handleSubmit,
  } = useForm<{ email: string; password: string }>({
    resolver:yupResolver(schema)
  });
    const navigateTo=useNavigate()
  const {showNotification}=useNotification()
  const {login,logout}=useAuth()

  const {mutate:authenticate,isPending}=useMutation({
    mutationFn:loginService,
   onSuccess: (data) => {
    console.log(data)
    if(data?.responseIndicator=="fail"){
        showNotification("login Failed","error")
        return;
    }else{
        showNotification("Login successful","success")
        login(data.response as UserType)
        navigateTo("/");
    }
  }, onError:()=>{
      showNotification("login Failed","error")
    }
  })

  const onSubmit = (data:{email:string,password:string}) => {
      authenticate(data)
  };
  useEffect(()=>{
    logout()
  },[])

 return (
    <div className="flex flex-col md:flex-row h-screen">
  
      <div className="hidden md:block md:w-3/5 h-screen relative">
        <img
          src={loginImage}
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-2/5 flex items-center justify-center p-8 md:p-12 bg-white shadow-lg">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
            Welcome Back !!
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Are you ready to join us? Let’s create Account
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <CustomFormField
                control={control}
                element="input"
                name="email"
                fieldProps={{ label: "Email", fullWidth: true }}
                rules={{ required: "Email is required" }}
              />
            </div>
            <div>
              <CustomFormField
                control={control}
                element="input"
                name="password"
                fieldProps={{ label: "Password", type: "password", fullWidth: true }}
                rules={{ required: "Password is required" }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!bg-black !text-white !rounded-md !py-3 hover:!bg-gray-800 transition"
              endIcon={isPending && <CircularProgress size={20} color="inherit" />}
            >
              Sign In
            </Button>
          </form>

          <div className="flex items-center gap-2 my-6 text-gray-400">
            <span className="h-px w-full bg-gray-300"></span>
            <span className="text-sm">OR</span>
            <span className="h-px w-full bg-gray-300"></span>
          </div>

          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Button variant="text" onClick={() => navigateTo("/signup")}>Sign up</Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
