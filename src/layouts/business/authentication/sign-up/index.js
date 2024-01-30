/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/business/authentication/components/BasicLayout";
import Socials from "layouts/business/authentication/components/Socials";
import Separator from "layouts/business/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { baseUrl } from "context";
import axios from "axios";

import { Formik } from 'formik'
import * as Yup from 'yup'

function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  //Signin Function
  const signup = () => {
    console.log('login', email, '====signup=====', password)

    const formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('password', password);
    // formdata.append('fcmToken', fcmToken);
    axios({
      method: 'post',
      url: `${baseUrl}/adminSignup`,
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(async function (response) {
        if (response.data.save) {
          const res = await response.data.newAdmin
          console.log("signup", res)
          await localStorage.setItem('isAdminLoggedIn', JSON.stringify(true))
          await localStorage.setItem('adminId', res._id)
          await localStorage.setItem('name', res.name)
          await localStorage.setItem('profile', res.profileImage)
          await localStorage.setItem('email', res.email)
          navigate('/dashboard');
        }
        else {
          console.log("=========else==")
          if (response.data.newAdmin == "An admin with the same email already exists.") {
            alert('email already registered');
          } else {
            alert("cannot create account");
          }
        }
      })
      .catch(function (response) {
        console.log(response);
      });
  }
  const signupSchema = Yup.object({
    name: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Please enter your full name.'),
    email: Yup.string().email('Invalid email').required('Please enter your email address.'),
    password: Yup.string().min(8, 'Too Short!').required('Please enter your password.').matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters, at least one uppercase letter ,one lowercase letter ,one number and one special character.'
    ),
  })
  return (
    <Formik
  initialValues={{
    name: '',
    email: '',
    password: ''
  }}
  validationSchema={signupSchema}
  onSubmit={(values, { setSubmitting }) => {
    setName(values.name);
    setEmail(values.email);
    setPassword(values.password);
    signup();
    setSubmitting(false);
  }}
>
{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
    <BasicLayout
      title="Welcome!"
      image={curved6}
    >
          <Card>
            {/* <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox> */}
            {/* <Separator /> */}
            <SoftBox pt={2} pb={3} px={3}>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                <SoftInput
                placeholder="Name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {errors.name}
                </SoftTypography>
              )}
                </SoftBox>
                <SoftBox mb={2}>
                <SoftInput
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {errors.email}
                </SoftTypography>
              )}
                </SoftBox>
                <SoftBox mb={2}>
                <SoftInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {errors.password}
                </SoftTypography>
              )}
                </SoftBox>

                <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth onClick={handleSubmit}>
                sign up
              </SoftButton>
            </SoftBox>
                <SoftBox mt={3} textAlign="center">
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    Already have an account?&nbsp;
                    <SoftTypography
                      component={Link}
                      to="/"
                      variant="button"
                      color="dark"
                      fontWeight="bold"
                      textGradient
                    >
                      Sign in
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </SoftBox>
          </Card>
        </BasicLayout>
      )}
    </Formik>
  );
}

export default SignUp;
