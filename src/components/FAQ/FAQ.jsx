import React from "react";

const FAQ = () => {
  return (
    <div className=" mb-5 ">
      <h2 className="text-center text-success mb-3">
        Question And Answer Part...
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are the difference between props and state ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                <ol>
                  <li>
                    props are passed via component properties, they're not
                    reactive.
                  </li>
                  <li>
                    State are variables that react will react , updating the UI
                    when values changes.
                  </li>
                  <li>
                    Props are a Component's configuration, its options if you
                    may. They are received from above and immutable.
                  </li>
                </ol>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How does useState work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                <ol>
                  <li>
                    useState is React Hook that allows you to add state to a
                    functional component.
                  </li>
                  <li>
                    It returns an array with two values: the current state and a
                    function to update it.
                  </li>
                  <li>
                    The Hook takes an initial state value as an argument and
                    returns an updated state value{" "}
                  </li>
                  <li>whenever the setter function is called.</li>
                </ol>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What does useEffect do other than load data?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                <ol>
                  <li>
                    When i call useEffect in my component, this is effectively
                    queuing or scheduling an effect to maybe run, after the
                    render is done.
                  </li>
                  <li>
                    After rendering finishes, useEffect will check the list of
                    dependency values against the values from the last render,
                    and will call your effect function if any one of them has
                    changed.
                  </li>
                  <li>
                    You can pass the special value of empty array [] as a way of
                    saying “only run on mount, and clean up on unmount”. So if
                    we changed our component above to call useEffect like this:
                  </li>
                  <li>
                    Then it will print “mounted” after the initial render,
                    remain silent throughout its life, and print “unmounting…”
                    on its way out.
                  </li>
                </ol>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How does react work?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                <ol>
                  <li>
                    ReactJS divides the UI into isolated reusable pieces of code
                    known as components.
                  </li>
                  <li>
                    React components work similarly to JavaScript functions as
                    they accept arbitrary inputs called properties or props.
                  </li>
                  <li>
                    Returned React elements determine how the UI will look at
                    the client end.
                  </li>
                  <li>
                    React implements a virtual DOM that is basically a DOM tree
                    representation in JavaScript
                  </li>
                  <li>
                    So when it needs to read or write to the DOM, it will use
                    the virtual representation of it.{" "}
                  </li>
                  <li>
                    Then the virtual DOM will try to find the most efficient way
                    to update the browser’s DOM.
                  </li>
                  <li>
                    Unlike browser DOM elements, React elements are plain
                    objects and are cheap to create. React DOM takes care of
                    updating the DOM to match the React elements.
                  </li>
                  <li>
                    The reason for this is that JavaScript is very fast and it’s
                    worth keeping a DOM tree in it to speed up its manipulation.
                  </li>
                </ol>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
