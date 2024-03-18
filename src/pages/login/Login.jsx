 import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values', values);
    // toast.success("Welcome to Our School !")
    message.success("Welcome to Our School")
    // Add your login logic here
  };

  return (
    <>
<section className="py-4 md:py-8 bg-white-100">

<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
    <img className="w-10 h-10 mr-2" src={logo} alt="osher.ai logo"/>
         TrueConnect
  </a>


<div className="flex mt-8 mb-8">
    <div className="flex items-center me-4">
    <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-black bg-gray-100 border-black focus:ring-white dark:focus:ring-white dark:ring-offset-white focus:ring-2 dark:bg-gray-100 dark:border-black"/>
        <label for="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-black">Admin</label>
    </div>
    <div className="flex items-center me-4">
    <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-black bg-gray-100 border-black focus:ring-white dark:focus:ring-white dark:ring-offset-white focus:ring-2 dark:bg-gray-100 dark:border-black"/>
        <label for="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-black">Employee</label>
    </div>
    <div className="flex items-center me-4">
        <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-black bg-gray-100 border-red-600 focus:ring-white dark:focus:ring-white dark:ring-offset-white focus:ring-2 dark:bg-gray-100 dark:border-black"/>
        <label for="inline-checked-radio" className="ms-2 text-sm font-medium  dark:text-black">Student</label>
    </div>
  </div>
  <div
    className="w-full bg-gray-200 rounded-lg shadow border-black md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-200 ">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
        Sign in to your account
      </h1>
      <form id="connect-google-button" method="post" action="">
        <button className="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-white hover:bg-gray-300 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-200 dark:bg-red-400 dark:text-black hover:border-black dark:hover:text-gary-300 dark:hover:bg-gray-200" type="submit">
      <svg className="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"></path><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs>
      </svg>
      Sign in with Google
  </button>
      </form>
      <div className="flex items-center">
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <form className="space-y-4 md:space-y-6" method="POST" action="/auth/login/">
        <div>
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email or userName</label>
          <input type="email" name="login" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
        </div>
        <div>
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800"/>
            </div>
            <div className="ml-3 text-sm">
            <label for="remember" className="text-gray-800 dark:text-gray-900">Remember me</label>
            </div>
          </div>
          <a href="" className="text-sm font-medium text-black hover:underline dark:red-600">Forgot password?</a>
        </div>

        <button type="submit" className="text-black bg-red-400 py-1.5 px-4 rounded font-bold w-full">
  Sign in
</button>
        <Link to ="/registration"><p className="text-sm font-light text-gray-800 dark:text-gray-700">
          Don’t have an account yet? <a href=""
            className="font-medium text-black hover:underline dark:gray-700">Sign up</a>
        </p></Link>
      </form>
    </div>
  </div>
</div>
</section>
    </>
    
  );
};

export default Login;
