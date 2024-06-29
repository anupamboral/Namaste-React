import { useRouteError } from "react-router-dom";

//*⁡⁣⁢⁣Another important feature provided by react-router-dom related to error handling :- a hook named "useRouterError"(from lesson-7).⁡
//* so let's import it from react router dom in this Error.js file as a named import. and how do we know that it is hook. so it is convention in the developer world that all hook names start with `use` like `useEffect`, `useState`. so now by looking at the name `useRouterError` we can easily understand that is a hook.so now let's import it first.

//*use of "useRouterError" hook:- using this hook we can get more information about error. so right now we are just displaying a simple message when error happens which is `oops something went wrong` but we can display a more information about the error which can improve the user experience.so depending on what kind of error has happened we can display detailed error message like if it is a network error,route fail error(entering some wrong path http://localhost:1234/djrfefe ) , server error.
//* so to use this hook , inside our Error component before returning anything at first we have to call this hook and save it's value inside a variable, because remember every hook is a function/method with a specific purpose.
//*now let's name this variable err. and now print it using a console.log(), then let's go to our app and enter some wrong path like localhost:1234/essfd , so the error can be displayed, and then if we go to our inspect tool , then in the console we will be able to see a object printed by the console.log(err) we just did. and inside the object this object there is a lot of information which we can use to display a better error message. so let's use this object's properties like err.status and err.statusTest to display a good error message so that we gonna add another heading element and inside that using template literal we will display some good error message.

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oopsss!!!</h1>
      <h2>Something went wrong</h2>
      <h2>{`${err.status}:- ${err.statusText}`}</h2>
    </div>
  );
};
export default Error;
