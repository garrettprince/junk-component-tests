import React, { useState } from "react";
import CardComponentTest from "./CardComponentTest";
import { Formik, Field, Form } from "formik";

function FormTest() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
          dueDate: null,
          duration: null,
          urgent: false,
        }}
        onSubmit={async (values) => {
          // post to supabase
          console.log(values);
          // call refresh function
        }}
      >
        {({ values, errors, touched, dirty }) => (
          <Form className="flex-col">
            <div>
              <Field type="text" name="title" placeholder="Title" />
            </div>
            <div>
              <Field
                type="description"
                name="description"
                placeholder="Description"
              />
            </div>
            <div>
              <Field type="text" name="category" placeholder="Category" />
            </div>
            <div>
              <Field type="date" name="dueDate" placeholder="Due Date" />
            </div>
            <div>
              <Field type="number" name="duration" placeholder="Duration" />
            </div>
            <div>
              <Field type="checkbox" name="urgent" placeholder="Urgent" />
            </div>
            <button className="disabled:text-gray-300 disabled:border-gray-300 border-2 rounded-full py-1 px-2 border-black" disabled={!dirty}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormTest;

// const [input, setInput] = useState("");
// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
// const [category, setCategory] = useState("");
// const [dueDate, setDueDate] = useState("");
// const [duration, setDuration] = useState("");
// const [urgent, setUrgent] = useState(true);

// const handleSubmit = (e) => {
//   e.preventDefault()
// };

// return (
//   <div>
//     <form className="flex justify-between" onSubmit={handleSubmit}>
//       <div className="flex-col border rounded-lg p-1">
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="flex"
//           placeholder="Enter a title"
//         />
//         <input
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="flex"
//           placeholder="Enter a body"
//         />
//         <input
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="flex"
//           placeholder="Type category"
//         />
//         <input
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//           className="flex"
//           placeholder="Due date"
//         />
//         <input
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           className="flex"
//           placeholder="Duration"
//         />
//         <input
//           value={urgent}
//           type="checkbox"
//           onChange={(e) => setUrgent(!setUrgent)}
//           className="flex"
//           placeholder=""
//         />
//       </div>
//       <button
//         disabled={!title}
//         type="submit"
//         className="disabled:text-gray-400"
//       >
//         Post
//       </button>
//     </form>

//     {title && (
//       <CardComponentTest
//         title={title}
//         description={description}
//         category={category.toUpperCase()}
//         dueDate={"DUE " + dueDate}
//         minutesDuration={duration}
//         urgent={urgent}
//       />
//     )}
//   </div>
// );
