import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should loader Header component with login button", () => {
  //* render method will render the header component inside jsdom. but jhsdom doesn't understands redux , but header component is using redux , useSelector hook, but as we are testing header component in isolation that's why we need to provide the redux store here also.
  //*So if we are creating the routing configuration then we can use routerProvider along with createBrowserRouter() with if the configuration is already created but we are testing some component in isolation then we can BrowserRouter component to provide the3 configuration as it  stores all other route components. It uses the HTML5 history API to keep the UI in sync with the URL.
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
